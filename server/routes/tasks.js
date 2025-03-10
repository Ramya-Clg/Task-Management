const express = require('express');
const router = express.Router();
const Task = require('../db/db');
const { taskValidationRules, validate, validateObjectId } = require('../config/validation');


// GET /tasks - Fetch all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
});

// POST /tasks - Add a new task
router.post('/', taskValidationRules, validate, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description || '',
    completed: req.body.completed || false
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create task', error: error.message });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', validateObjectId, validate, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
});

module.exports = router;