const { validationResult } = require('express-validator');
const Task = require('../models/Task.model');

module.exports.taskController = {
  addTask: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Error', errors });
      }

      const createTask = await Task.create({
        title: req.body.title,
        deadline: req.body.deadline,
        completed: req.body.completed,
      });

      const task = await Task.findById(createTask._id);

      return res.json({ message: 'Task created', task });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },

  getTasks: async (req, res) => {
    try {
      const allTasks = await Task.find();

      return res.json(allTasks);
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },

  removeTask: async (req, res) => {
    try {
      const { id } = req.params;

      const task = await Task.findById(id)

      if (!task) return res.status(404).send("Task not found...");

      await Task.findByIdAndRemove(id);

      return res.json({ message: 'Task deleted' });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },

  restoreTask: async (req, res) => {
    try {
      const { id } = req.params;

      await Task.findByIdAndUpdate(id, req.body);

      return res.json({ message: 'Task restored ' });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
