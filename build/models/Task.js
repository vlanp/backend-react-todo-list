import { Schema, model } from "mongoose";
const taskSchema = new Schema({
    task: String,
    finished: Boolean,
});
const Task = model("Task", taskSchema);
export default Task;
