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
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
