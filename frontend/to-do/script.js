const addTask = document.getElementById("add-task-button");
const inputTask = document.getElementById("input-task");
const taskLists = document.getElementById("task-list");
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addTask.addEventListener("click", (e) =>{
    if (inputTask.value === '') {
        console.log("You must write something!");
    } else {
        taskList.push(inputTask.value);
        inputTask.value = '';
        localStorage.setItem("tasks", JSON.stringify(taskList));
        displayTasks();
    }
});

function displayTasks(){
    let htmlCode = "";
    taskList.forEach((tasks, index) => {
        htmlCode += `<li class="line_by_width">
                        <div>
                            <input type="checkbox" />
                            <span class="task">${tasks}</span>
                        </div>
                        <button class="delete-btn" onclick="deleteTasks(${index})">X</button>
                    </li>`;
    });
    taskLists.innerHTML = htmlCode;
}

function deleteTasks(index){
    let tasks = localStorage.getItem("tasks");
    taskList = JSON.parse(tasks);
    taskList.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
}