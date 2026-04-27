import { Task } from "../models/task";

export class TaskService {
  private tasks: Task[] = [];

  getAll(): Task[] {
    return this.tasks;
  }

  create(task: Task): Task {
    const newTask = {
      ...task,
      id: Date.now().toString(),
    };

    this.tasks.push(newTask);
    return newTask;
  }

  toggle(id: string): Task | null {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) {
      return null;
    }

    task.completed = !task.completed;
    return task;
  }

  // 🔴 DELETE
  delete(id: string): boolean {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index === -1) {
      return false;
    }

    this.tasks.splice(index, 1);
    return true;
  }

  // 🟡 UPDATE
  update(id: string, title: string): Task | null {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) {
      return null;
    }

    task.title = title;
    return task;
  }
}
