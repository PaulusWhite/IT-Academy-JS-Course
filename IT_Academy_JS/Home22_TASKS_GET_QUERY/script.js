let body = document.body;
let list = document.querySelector("#list");
let allBtns = document.querySelectorAll("button");
let func = async () => {
    allBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
            let res = await fetch(`./${btn.id}.html`)
            let dataText = await res.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(dataText, "text/html");
            let content = doc.body
            content.lastElementChild.remove();
            let renderContent = document.createElement("span");
            renderContent.innerHTML = content.innerHTML;
            if(btn.id === "service"){
                let li = document.createElement("li");
                let timeNow = new Date;
                li.innerHTML = content.innerHTML + timeNow.toLocaleTimeString();
                list.append(li);
            }else{
                body.append(renderContent)
            }
            // способ  body.innerHTML += content.innerHTML  почему-то работает только 1 раз,после чего ни одно событие не отрабатывает
        })
    })    
}
func()