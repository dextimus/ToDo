"use strict";
class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.date = new Date();
    }
    getTitle() {
        return this.title;
    }
    getStatus() {
        return this.status;
    }
    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setTitle(title) {
        this.title = title;
    }
    setStatus(status) {
        this.status = status;
    }
    setDate(date) {
        this.date = date;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    add(model) {
        this.tasks.push(model);
    }
    remove(id) {
        const index = this.tasks.findIndex((task) => task.getId() === id);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
    update(model) {
        const index = this.tasks.findIndex((task) => task.getId() === model.getId());
        if (index > -1) {
            this.tasks[index] = model;
        }
    }
    complete(model) {
        model.setStatus("completed");
    }
    printAll() {
        const list = document.getElementById("tasksList");
        list.innerHTML = "";
        this.tasks.forEach((task) => {
            const taskLi = document.createElement("li");
            taskLi.innerHTML = task.getTitle();
            list.appendChild(taskLi);
        });
        console.log(this.tasks);
    }
}
const taskManager = new TaskManager();
const taskItem = new Task(0, "sutvarkyti dokumentus", "created");
// console.log(taskItem.getStatus());
// taskManager.complete(taskItem);
// // taskItem.completeTask();
// console.log(taskItem.getStatus());
function createTask() {
    const taskElement = document.getElementById("newTaskInput");
    const newTaskTitle = taskElement.value;
    const taskItem = new Task(0, newTaskTitle, "created");
    taskManager.add(taskItem);
    taskManager.printAll();
}
const getButton = document.getElementById("createButton");
getButton.addEventListener("click", createTask);
