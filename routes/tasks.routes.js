import { Router } from "express";
import {
  deleteTasks,
  getTask,
  getTasks,
  postTasks,
  putTasks,
} from "../controllers/tasks.controllers.js";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);

router.post("/tasks", postTasks);

router.put("/tasks/:id", putTasks);

router.delete("/tasks/:id", deleteTasks);

export default router;
