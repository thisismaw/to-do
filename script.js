function displayCurrentTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    const formattedTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    const timeDiv = document.querySelector(".current-time");
    timeDiv.textContent = formattedTime;
  }
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = taskText;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskDiv.remove();
      });
      taskDiv.appendChild(taskTextSpan);
      taskDiv.appendChild(deleteButton);
      taskList.appendChild(taskDiv);
      taskInput.value = "";
    }
  }
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function clearTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  }

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearTasks);

  setInterval(displayCurrentTime, 1000);
  