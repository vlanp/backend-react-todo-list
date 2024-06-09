import express from "express";
import Task from "../models/Task.js";
const router = express.Router();
router.get("/task", async (req, res) => {
    try {
        const response = await Task.find();
        res.status(200).json({ message: response });
    }
    catch (error) {
        res
            .status(error.status || 500)
            .json({ message: error.message || "Internal server error" });
    }
});
router.post("/task", async (req, res) => {
    try {
        const { task } = req.body;
        const newTask = new Task({
            task: task,
        });
        const response = await newTask.save();
        res.status(201).json({ message: response });
    }
    catch (error) {
        res
            .status(error.status || 500)
            .json({ message: error.message || "Internal server error" });
    }
});
router.delete("/task/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            throw { status: 404, message: "No task found with this id" };
        }
        res.status(200).json({ message: "Task successfully deleted" });
    }
    catch (error) {
        res
            .status(error.status || 500)
            .json({ message: error.message || "Internal server error" });
    }
});
export default router;
