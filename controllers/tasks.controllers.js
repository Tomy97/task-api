import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE ID = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      res.status(404).json({ message: "Task not found" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({ id: result.insertId, title: title, description: description });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putTasks = async (req, res) => {
  try {
    await pool.query(
      "UPDATE tasks SET title = ?, description = ? WHERE ID = ?",
      [req.body.title, req.body.description, req.params.id]
    );

    res.json({ message: "Task updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE ID = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
