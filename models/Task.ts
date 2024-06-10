import { Schema, model } from "mongoose";
import ITask from "../interfaces/ITask.js";

const taskSchema = new Schema<ITask>({
  task: String,
  finished: Boolean,
});

const Task = model<ITask>("Task", taskSchema);

export default Task;
