// const counterTasks = () => {
//   const currentCounter = document.querySelector('.task-counter');
//   const boxTasks = document.querySelector('.all-tasks');
//   const currentTasks = boxTasks.getElementsByClassName('task-item').length;

//   currentCounter.innerHTML = currentTasks;
// }

// counterTasks();
const counterTasks = () => {
let allSpanCount = document.querySelectorAll(".basic-content .task-counter");
allSpanCount.forEach((elem) => {
  elem.innerHTML = elem.parentElement.nextElementSibling.children.length;
  })
}
counterTasks();