let setTask = document.querySelector("#setTask");
let setTime = document.querySelector("#setTime");
let btnAdd = document.querySelector("#btn");
let list = document.querySelector("#list");

let deleteData = async () => {
    let allBtnsDelete = document.querySelectorAll(".delete");
    allBtnsDelete.forEach((btn,index) => {
        btn.addEventListener("click", () => {
            fetch(`http://localhost:3000/todos/${index+1}`, {
            method: 'DELETE'
            })
        })
    })
}

let putData = async () => {
    let allBtsEdit = document.querySelectorAll(".edit");
    allBtsEdit.forEach((btn,index) => {
        btn.addEventListener("click", () => {
            let editTask = prompt("Редактирование задачи");
            let editTime = prompt("Редактирование времени");
            let edit = {
                "title":editTask,
                "time":editTime
            }
            fetch(`http://localhost:3000/todos/${index+1}`, {
                method:"PUT",
                body:JSON.stringify(edit),
                headers:{
                    "Content-type": "application/json; charset=utf-8" 
                }
            })
        })
    })
}

let postData = async () => {
    let task = {
        "title":setTask.value,
        "time":setTime.value
    }
    fetch("http://localhost:3000/todos",({
        method:"POST",
        body:JSON.stringify(task),
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        }
    }))
}

let getData = async () => {
    let res = await fetch("http://localhost:3000/todos");
    let json = await res.json();
    json.forEach((post) => {
            list.innerHTML += `
            <li class="task"><p>${post.title} (${post.time} days)</p><button class="delete">Удалить</button><button class="edit">Редактировать</button></li>
            `
    })
    deleteData()
    putData()
}


btnAdd.addEventListener("click", () => {
    if(setTask.value !== "" && setTime.value !== ""){
        postData()
        setTask.value = "";
        setTime.value = "";
    }
})
getData()

