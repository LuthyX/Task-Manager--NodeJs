const express = require('express')
const router = express.Router()
const { getTask, getAllTasks, createTask, deleteTask, updateTask } = require('../controllers/tasks')

router.get('/:id', getTask);
router.get('/', getAllTasks)
router.post('/', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router