import { Router } from "express";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);

router.post("/", createTask);

router.patch("/:id", toggleTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
