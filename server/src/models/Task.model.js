const { Schema, model } = require('mongoose');

const taskSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: String,
    },
  },
  { timestamps: true }
);

const Task = model('Task', taskSchema);

module.exports = Task;
