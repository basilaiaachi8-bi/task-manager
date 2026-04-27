import { Request, Response } from "express";
import { TaskService } from "../services/taskService";

const service = new TaskService();

export const getTasks = (req: Request, res: Response) => {
  res.json(service.getAll());
};

export const createTask = (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = service.create({
    title,
    completed: false,
    id: "",
  });

  res.status(201).json(task);
};

export const toggleTask = (req: Request, res: Response) => {
  const task = service.toggle(req.params.id as string);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const success = service.delete(req.params.id as string);

  if (!success) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};

export const updateTask = (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = service.update(req.params.id as string, title);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};
