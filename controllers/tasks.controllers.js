import { Tasks } from "../models/tasks.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({
      attributes: req.attributes,
      order: [["createAt", "ASC"]]
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taks = await Tasks.findOne({
      where: { id },
      attributes: req.attributes
    });
    res.json(taks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTaks = await Tasks.create({
      title,
      description
    });
    res.json(newTaks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tasks.findOne({
      where: { id },
      attributes: req.attributes
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.set(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    await Tasks.destroy({
      where: {
        id
      }
    });
    return res.status(204).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
