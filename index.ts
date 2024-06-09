import dotenv from "dotenv";
import express from "express";
import cors = require("cors");
import taskRouter from "./routes/task.js";
import mongoose from "mongoose";
import { Application } from "express";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string);

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(taskRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
