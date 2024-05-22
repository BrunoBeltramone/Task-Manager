// models/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the task"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for the task"],
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done", "Discard"],
    default: "To Do",
  },
  conflict: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  tags: {
    type: [String],
    enum: ["WebApp", "Blockchain", "Design", "Experimental", "Improve"],
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
