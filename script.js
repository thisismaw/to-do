// get the form and task list elements
const addTaskForm = document.querySelector('#add-task-form');
const taskList = document.querySelector('#task-list');

// initialize the task array
let tasks = [];

// add event listener for form submission
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  const taskNameInput = addTaskForm.elements['task-name'];
  const taskName = taskNameInput.value.trim();
  if (taskName) {
    addTask(taskName); // add task to list
    taskNameInput.value = ''; // clear input field
    taskNameInput.focus(); // focus on input field
  }
});

// function to add task to list
function addTask(taskName) {
  const task = {
    id: Date.now(),
    name: taskName,
    completed: false
  };
  tasks.push(task); // add task to array
  displayTask(task); // display task in list
}

// function to display task in list
function displayTask(task) {
  const taskItem = document.createElement('li');
  taskItem.dataset.id = task.id;
  taskItem.innerHTML = `
    <label>
      <input type="checkbox" class="checkbox"${task.completed ? ' checked' : ''}>
      <span class="task-name">${task.name}</span>
    </label>
    <button class="delete-button">Delete</button>
  `;
  const deleteButton = taskItem.querySelector('.delete-button');
  const checkbox = taskItem.querySelector('.checkbox');
  checkbox.addEventListener('change', () => {
    updateTaskCompleted(task.id, checkbox.checked);
  });
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });
  taskList.appendChild(taskItem);
}

// function to update task completed status
function updateTaskCompleted(taskId, completed) {
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = completed;
    const taskItem = taskList.querySelector(`[data-id="${task.id}"]`);
    const checkbox = taskItem.querySelector('.checkbox');
    if (completed) {
      checkbox.classList.add('checked');
    } else {
      checkbox.classList.remove('checked');
    }
  }
}

// function to delete task from list
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  const taskItem = taskList.querySelector(`[data-id="${taskId}"]`);
  taskItem.remove();
}
