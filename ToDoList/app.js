class DataBase {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        const id = localStorage.getItem("id");
        if (id === null) {
            localStorage.setItem("id", "0");
        }
    }

    loadTasks() {
        const tasks = [];
        const id = localStorage.getItem("id");

        for (let i = 1; i <= id; i++) {
            try {
                const task = JSON.parse(localStorage.getItem(i));
                if (task !== null) {
                    task.id = i;
                    tasks.push(task);
                }
            } catch (e) {
                console.error(`Error loading task with id ${i}:`, e);
            }
        }
        return tasks;
    }

    createTask(task) {
        const id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem("id", id.toString());
    }

    editTask(task) {
        if (task && task.id) {
            localStorage.setItem(task.id, JSON.stringify(task));
        } else {
            console.error("Task inválida ou sem ID.");
        }
    }

    removeTask(id) {
        localStorage.removeItem(id);
    }

    getNextId() {
        const currentId = localStorage.getItem("id");
        return parseInt(currentId) + 1;
    }
}

const db = new DataBase();

function createNewTask() {
    const taskValue = document.querySelector("#item").value;

    if (taskValue) {
        const newTask = {
            name: taskValue,
            completed: false,
        };

        db.createTask(newTask);
        reset();
        renderTasks();
    }
}

function reset() {
    document.querySelector("#item").value = "";
}

function renderTasks() {
    const taskContainer = document.querySelector("#tasks");
    taskContainer.innerHTML = "";

    const tasks = db.loadTasks();

    tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add(
            "task-item",
            "flex",
            "justify-between",
            "my-3",
            "border-solid",
            "border",
            "border-indigo-600",
            "rounded-full",
            "p-3"
        );

        if (task.completed) {
            taskElement.classList.add("line-through");
        }
        
        const taskName = document.createElement("h2");
        taskName.innerText = task.name;
        taskName.classList.add("task-name");
        taskElement.appendChild(taskName);

        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("flex", "gap-2");

        const editIcon = document.createElement("img");
        editIcon.src = "./edit.svg";
        editIcon.alt = "Edit task";
        editIcon.onclick = () => editTask(task.id);
        actionsContainer.appendChild(editIcon);

        const checkIcon = document.createElement("img");
        checkIcon.src = "./check.svg";
        checkIcon.alt = "Complete task";
        checkIcon.onclick = () => completeTask(task.id);
        actionsContainer.appendChild(checkIcon);

        // Ícone de "deletar"
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./delete.svg";
        deleteIcon.alt = "Delete task";
        deleteIcon.onclick = () => deleteTask(task.id);
        actionsContainer.appendChild(deleteIcon);

        taskElement.appendChild(actionsContainer);

        taskContainer.appendChild(taskElement);
    });
}

function editTask(id) {
    const tasks = db.loadTasks();
    const task = tasks.find(t => t.id === id);

    if (task) {
        const newTaskName = prompt("Edite a tarefa:", task.name);

        if (newTaskName !== null && newTaskName.trim() !== "") {
            task.name = newTaskName;
            db.editTask(task);
            renderTasks();
        }
    }
}

function completeTask(id) {
    const tasks = db.loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = !task.completed;
        db.editTask(task);
        renderTasks();
    }
}

function deleteTask(id) {
    db.removeTask(id);
    renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
