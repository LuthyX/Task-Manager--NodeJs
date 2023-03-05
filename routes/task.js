const express = require('express')
const router = express.Router()
const { getTask, getAllTasks, createTask, deleteTask, updateTask } = require('../controllers/tasks')

router.get('/', getTask);
router.get('/:id', getAllTasks)
router.post('/', createTask)
router.patch(':id', updateTask)
router.delete('/:id')
module.exports = router