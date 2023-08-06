const addTask = document.querySelector('.card')
const tasksList = document.querySelector('.tasks__list')
const input = document.querySelector('.tasks__input')


let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach((task) => renderTask(task))
}
function addTaskList (event) {
    event.preventDefault()
    if(input.value) {
        const taskText = input.value
        const newTask = {
            id: Date.now(),
            text: taskText,
            done: false
        }

        tasks.push(newTask)

        saveToLocalStorage()

        renderTask(newTask)
    } else alert ('Заполните поле ввода')
    input.value = ""
    input.focus()
}
function deleteTaskList(event) {
    if(event.target.closest('.task__remove')){
        const parentNode = event.target.closest('.task')
        const id = Number(parentNode.id)
        const index = tasks.findIndex((task) => task.id === id)

        tasks.splice(index, 1)

        saveToLocalStorage()

        parentNode.remove()
    }
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
    const taskHTML = `
      <div id="${task.id}" class="task">
          <div class="task__title">${task.text}</div>
          <a href="#" class="task__remove">&times;</a>
      </div>
     `;
    tasksList.insertAdjacentHTML('beforeend', taskHTML)
}

addTask.addEventListener('submit', addTaskList)

tasksList.addEventListener('click', deleteTaskList)


