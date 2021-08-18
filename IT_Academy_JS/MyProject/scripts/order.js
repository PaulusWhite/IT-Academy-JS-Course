let desc = document.querySelector("#payment-description");
let priceForGoods = document.querySelector(".main-content__priceForGoods span");
let deliveryPrice = document.querySelector(".main-content__delivery-price span");
let totalPriceForOrder = document.querySelector(".main-content__totalPriceForAll span");
let waysOfPayment = document.querySelector(".main-content__ways-payment");

let getPriceFromLocalStorage = async () => {
    return priceForGoods.innerHTML = localStorage.getItem("price"),
    totalPriceForOrder.innerHTML = (parseFloat(priceForGoods.innerHTML) + parseFloat(deliveryPrice.innerHTML)).toFixed(2) + " руб";
}
getPriceFromLocalStorage();

let setTotalPriceForOrder = () => {
    totalPriceForOrder.innerHTML = (parseFloat(priceForGoods.innerHTML) + parseFloat(deliveryPrice.innerHTML)).toFixed(2) + " руб";
}

let allInputsDelivery = document.querySelectorAll(".main-content__box-for-delivery input");

let paymentPickup = () => {
    let allInputsPayment = document.querySelectorAll(".main-content__box-for-payment input");
    allInputsPayment.forEach((input) => {
        if(input.checked){
            if(input.id === "cash"){
                desc.innerHTML = "Оплата наличными на месте при покупке товара";
            }
            if(input.id === "card"){
                desc.innerHTML = "Visa, MasterCard, American Express";
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            }
        }
    })
    allInputsPayment.forEach((input) => {
        input.addEventListener("click", () => {
            if(input.id === "cash"){
                desc.innerHTML = "Оплата наличными на месте при покупке товара";
            }
            if(input.id === "card"){
                desc.innerHTML = "Visa, MasterCard, American Express";
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            } 
        })
    })
    setTotalPriceForOrder();
}

let paymentCourier = () => {
    let allInputsPayment = document.querySelectorAll(".main-content__box-for-payment input");
    allInputsPayment.forEach((input) => {
        if(input.checked){
            if(input.id === "cash"){
                desc.innerHTML = "Оплата наличными курьеру при получении товара";
            }
            if(input.id === "card"){
                desc.innerHTML = "Visa, MasterCard, American Express";
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            }
        }
    })
    allInputsPayment.forEach((input) => {
        input.addEventListener("click", () => {
            if(input.id === "cash"){
                desc.innerHTML = "Оплата наличными курьеру при получении товара";
            }
            if(input.id === "card"){
                desc.innerHTML = "Visa, MasterCard, American Express";
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            }
        })
    })
    setTotalPriceForOrder();
}

let paymentPost = () => {
    let allInputsPayment = document.querySelectorAll(".main-content__box-for-payment input");
    allInputsPayment.forEach((input) => {
        if(input.checked){
            if(input.id === "imposed"){
                desc.innerHTML = `Услуга доставки отправлений с наложенным платежом дает отправителю возможность взыскать с получателя необходимую сумму денежных средств в момент вручения отправления.
                <br>
                Наложенный платеж может быть осуществлен наличными денежными средствами либо с использованием банковской пластиковой карты. Денежные средства в размере суммы наложенного платежа будут направлены отправителю электронным денежным переводом.`;
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            }
        }
    })
    allInputsPayment.forEach((input) => {
        input.addEventListener("click", () => {
            if(input.id === "imposed"){
                desc.innerHTML = `Услуга доставки отправлений с наложенным платежом дает отправителю возможность взыскать с получателя необходимую сумму денежных средств в момент вручения отправления.
                                 <br>
                                 Наложенный платеж может быть осуществлен наличными денежными средствами либо с использованием банковской пластиковой карты. Денежные средства в размере суммы наложенного платежа будут направлены отправителю электронным денежным переводом.`;
            }
            if(input.id === "internet"){
                desc.innerHTML = `Оплата через интернет - это удобное средство расчётов за товары через интернет в режиме реального времени непосредственно после оформления заказа.
                <br>
                Для совершения оплаты заказа принимаются карточки международных систем VISA (всех видов), MasterCard (в том числе Maestro), эмитированные любым банком мира.
                <br>
                Никаких комиссий и дополнительных платежей не взимается!`;
            }
        })
    })
    setTotalPriceForOrder();
}

let renderWaysOfPayment = () => {
    allInputsDelivery.forEach((input) => {
        if(input.checked){
            if(input.id === "pickup"){
                deliveryPrice.innerHTML = "0 руб";
                paymentPickup()
            }
            if(input.id === "courier"){
                deliveryPrice.innerHTML = "8 руб";
            }
            if(input.id === "post"){
                deliveryPrice.innerHTML = "4 руб";
            }
        }
    })
    allInputsDelivery.forEach((input) => {
        input.addEventListener("click", () => {
            if(input.id === "pickup"){
                waysOfPayment.innerHTML = `
                <div class="main-content__payment-method">
                            <input type="radio" id="cash" name="payment" checked>
                            <label for="cash">Наличный расчёт</label>
                        </div>
                        <div class="main-content__payment-method">
                            <input type="radio" id="card" name="payment">
                            <label for="card">Расчёт банковской картой</label>
                        </div>
                        <div class="main-content__payment-method">
                            <input type="radio" id="internet" name="payment">
                            <label for="internet">Оплата картой через интернет</label>
                        </div>
                `
                deliveryPrice.innerHTML = "0 руб";
                paymentPickup()
            }
            if(input.id === "courier"){
                waysOfPayment.innerHTML = `
                <div class="main-content__payment-method">
                            <input type="radio" id="cash" name="payment" checked>
                            <label for="cash">Наличный расчёт</label>
                        </div>
                        <div class="main-content__payment-method">
                            <input type="radio" id="card" name="payment">
                            <label for="card">Расчёт банковской картой</label>
                        </div>
                        <div class="main-content__payment-method">
                            <input type="radio" id="internet" name="payment">
                            <label for="internet">Оплата картой через интернет</label>
                        </div>
                `
                deliveryPrice.innerHTML = "8 руб";
                paymentCourier();
            }
            if(input.id === "post"){
                waysOfPayment.innerHTML = `
                    <div class="main-content__payment-method">
                        <input type="radio" id="imposed" name="payment" checked>
                        <label for="imposed">Наложенный платёж</label>
                    </div>
                    <div class="main-content__payment-method">
                        <input type="radio" id="internet" name="payment">
                        <label for="internet">Оплата картой через интернет</label>
                    </div>
                `
                deliveryPrice.innerHTML = "4 руб";
                paymentPost();
            }
        })
    })
}

renderWaysOfPayment();
setTotalPriceForOrder();