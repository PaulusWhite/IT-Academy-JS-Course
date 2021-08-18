let itemsList = document.querySelector(".main-content__items table tbody");
let emptyBox = document.querySelector(".main-content__basket-box .main-content__empty");
let boxForMakeOrder = document.querySelector(".main-content__making-order");
let basketBox = document.querySelector(".main-content__basket-box");

let renderEmptyBox = () => {
    if(itemsList.children.length === 0){
        emptyBox.style.display = "flex";
        boxForMakeOrder.style.cssText = "display:none;";
    }
}
let runPageProduct = () => {
    let allItems = document.querySelectorAll(".main-content__basket-box .main-content__items tbody tr");
    allItems.forEach((item) => {
        let name = item.children[1].firstElementChild;
        let imgItem = item.firstElementChild.firstElementChild;
        name.addEventListener("mouseover", () => {
            name.style.textDecoration = "underline";
        })
        name.addEventListener("mouseout", () => {
            name.style.textDecoration = "none";
        })
        name.addEventListener("click", () => {
            let id = name.parentElement.parentElement.lastElementChild.textContent;
            localStorage.setItem("bookId", id);
            document.location.href = "productPage.html";
        })
        imgItem.addEventListener("click", () => {
            let id = name.parentElement.parentElement.lastElementChild.textContent;
            localStorage.setItem("bookId", id);
            document.location.href = "productPage.html";
        })
    })
}

let curentNumGoods = () => {
    let allItems = document.querySelectorAll(".main-content__basket-box .main-content__items tbody tr");
    let totalPriceForAllItems = document.getElementById("totalPrice");
    let totalPriceForAllItemCurrent = 0;
    let currentPrice = () => {
        allItems.forEach((item) => {
            let priceForItem = (parseFloat(item.children[2].firstElementChild.firstElementChild.innerHTML)).toFixed(2)
            let minus = item.children[3].firstElementChild.firstElementChild;
            let amount = item.children[3].firstElementChild.firstElementChild.nextElementSibling;
            let plus = item.children[3].firstElementChild.lastElementChild;
            let totalPriceForItem = item.children[4].firstElementChild;
            totalPriceForAllItemCurrent += parseFloat(totalPriceForItem.innerHTML);
            totalPriceForAllItems.innerHTML = totalPriceForAllItemCurrent.toFixed(2) + " руб";
            minus.addEventListener("click", () => {
                if(+amount.innerHTML > 1){
                    amount.innerHTML--;
                    totalPriceForAllItemCurrent -= parseFloat(priceForItem);
                    totalPriceForAllItems.innerHTML = totalPriceForAllItemCurrent.toFixed(2) + " руб";
                }
                totalPriceForItem.innerHTML = (+priceForItem * +amount.textContent).toFixed(2) + " руб";
            })
            plus.addEventListener("click", () => {
                amount.innerHTML++;
                totalPriceForItem.innerHTML = (+priceForItem * +amount.textContent).toFixed(2) + " руб";
                totalPriceForAllItemCurrent += parseFloat(priceForItem);
                totalPriceForAllItems.innerHTML = totalPriceForAllItemCurrent.toFixed(2) + " руб";
            })
        })
    }
    let dltItem = () => {
        allItems.forEach((item) => {
            let totalPriceForItem = item.children[4].firstElementChild;
            let dltBtn = item.children[item.children.length-2].firstElementChild;
            dltBtn.addEventListener("click", () => {
                arrLocalStorageIds.forEach((idFromLS) => {
                    let idItem = item.lastElementChild.textContent;
                        if(+idItem === +idFromLS){
                            let position = arrLocalStorageIds.indexOf(idFromLS);
                            arrLocalStorageIds.splice(position,1);
                            localStorage.setItem("ids",arrLocalStorageIds);
                        }
                })
                item.remove();
                indicatorBasket.innerHTML = arrLocalStorageIds.length-1;
                totalPriceForAllItemCurrent -= parseFloat(totalPriceForItem.innerHTML);
                totalPriceForAllItems.innerHTML = totalPriceForAllItemCurrent.toFixed(2) + " руб";
                renderEmptyBox();
            })
        })
    }
    dltItem();
    currentPrice();
}

let getDataForBasket = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    arrLocalStorageIds.forEach((id) =>{    //basket.js
        data.forEach((item) => {
            if(item.id === +id){
                let tdTotalPrice = parseFloat(item.price).toFixed(2)
                itemsList.innerHTML += `
                <tr>
                    <td class="td-for-img"><img src="img/books/${item.img}.png" ></td>
                    <td class="td-for-name">
                        <p>${item.nameBook}</p>
                    </td>
                    <td class="td-for-price">
                        <div class="box-for-one-price">
                            <p>${item.price}</p>
                            <span>Цена за 1 шт</span>
                        </div>
                    </td>
                    <td class="td-for-current">
                        <div class="box-for-current">
                            <span id="current-minus">-</span>
                            <span id="current-amount">1</span>
                            <span id="current-plus">+</span>
                        </div>
                        <span>шт</span>
                    </td>
                    <td class="td-for-total-price">
                        <p>${tdTotalPrice} руб</p>
                    </td>
                    <td class="td-for-delete"><i class="fas fa-times"></i></td>
                    <td class="dt-for-id">${item.id}</td>
                </tr>
                `
            }
        })
    })
    renderEmptyBox();
    curentNumGoods();
    makeOrder();
    runPageProduct();
}
getDataForBasket();
