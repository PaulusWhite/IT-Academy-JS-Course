const drag = (event) => {
  event.target.style.opacity = '0.7';
  event.dataTransfer.setData("text", event.target.id); // определили id перетаскиваемого элемента
}

const drop = (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let currentDrop = event.target.closest('.task-item')
  let currentHead = event.target.closest('.head-task');
  if (currentDrop || currentHead) {
    let currentElement = document.getElementById(data);
    currentDrop.parentElement.insertBefore(currentElement, currentDrop);
  } else {
    event.target.appendChild(document.getElementById(data)); // элемент перетаскивается в новую колонку
  }


}

const allowDrop = (event) => {
  event.preventDefault();
}

const dragEnd = (event) => {
  let taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    task.classList.remove('over');
  })
  event.target.style.opacity = 1;

  counterTasks(); //counter current tasks
}

const dragEnter = (event) => {
  event.target.closest('.task-item').classList.add('over');
}

const initDragAndDrop = () => {
  let taskList = document.getElementsByClassName('task-item');
  let boxList = document.getElementsByClassName('task-col1');

  for (let task of taskList) {
    task.draggable = true;
    task.addEventListener('dragstart', drag);
    task.addEventListener('dragend', dragEnd);
    task.addEventListener('dragenter', dragEnter);
  }

  for (let col of boxList) {
    col.addEventListener('drop', drop);
    col.addEventListener('dragover', allowDrop);
  }

}

initDragAndDrop();