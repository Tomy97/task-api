import express from "express";
import { PORT } from "./puerto.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
// import { config } from './config/config.js'
import './models/tasks.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.use(taskRoutes);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
