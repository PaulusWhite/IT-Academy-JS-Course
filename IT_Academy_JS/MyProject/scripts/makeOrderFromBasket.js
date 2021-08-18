let makeOrder = async () => {
    let btn = document.querySelector("#makeOrder");
    btn.addEventListener("click", async () => {
        console.log(123)
        let totalPriceForAllItems = document.getElementById("totalPrice").textContent;
        localStorage.setItem("price",totalPriceForAllItems);
    })
}