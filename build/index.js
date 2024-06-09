import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
import dotenv from "dotenv";
import express from "express";
const cors = __require("cors");
import taskRouter from "./routes/task.js";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
const app = express();
app.use(cors());
app.use(express.json());
app.use(taskRouter);
app.all("*", (req, res) => {
    res.status(404).json({ message: "This route does not exist" });
});
app.listen(process.env.PORT, () => {
    console.log("Server started");
});
