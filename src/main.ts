import { TaskManager } from "./Managers/TaskManager";
import { Task } from "./Models/Task";
import { User } from "./Models/User";
import "./css/sakura.css";
import "./css/styles.css";
import "./css/sass/test.scss"

const taskManager = new TaskManager();

//-----------Funkcijos skirtos Event Listeneriams----------

function createTask(): void {
  const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
  const newTaskTitle = taskElement.value;
  const kamPriklauso = new User("Tautvydas");
  const taskItem = new Task(newTaskTitle, kamPriklauso.getId());
  taskManager.add(taskItem);
  taskManager.printAll();
}

async function PrintAllTasks(): Promise<void> {
  const tasks: Response = await fetch("tasks.json");
  const tasksJson: any = await tasks.json();

  tasksJson.forEach((taskData: any): void => {
    const taskItem = new Task(taskData.title, taskData.kamPriklauso);
    taskManager.add(taskItem);
    console.log(taskItem);
  });
  taskManager.printAll();
}

//----------Event Listeners----------

const getButton = document.getElementById("createButton") as HTMLButtonElement;
getButton.addEventListener("click", createTask);

document.addEventListener("DOMContentLoaded", PrintAllTasks);
