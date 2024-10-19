import { Task } from "../Models/Task";
import { IManager } from "./IManager";

export class BaseManager implements IManager {
  private tasks: Task[] = [];
  add(model: Task) {
    this.tasks.push(model);
  }

  remove(id: string) {
    const index = this.tasks.findIndex((task: Task) => task.getId() === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.printAll;
    }
  }

  update(model: Task) {
    const index = this.tasks.findIndex((task: Task) => task.getId() === model.getId());
    if (index > -1) {
      this.tasks[index] = model;
    }
  }

  complete(model: Task) {
    model.setStatus("completed");
  }

  printAll() {
    const list = document.getElementById("tasksList") as HTMLUListElement;
    list.innerHTML = "";
    this.tasks.forEach((task: Task) => {
      const taskLi = document.createElement("li") as HTMLLIElement;
      taskLi.innerHTML = task.getTitle();
      list.appendChild(taskLi);
    });

    console.log(this.tasks);
  }
}
