// models/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the task"]
  },
  description: {
    type: String,
    required: [true, "Please provide a description for the task"]
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do"
  },
  conflict: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low"
  },
  tags: {
    type: [String],
    enum: ["WebApp", "Experimental", "Blockchain", "Design", "Improve", "Discard"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  workspace: {
    type: String,
    enum: ["Work", "Peexle", "Trading App", "TaskPro", "Personal"],
    default: "Peexle"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required"]
  }
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);