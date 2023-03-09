const Task = require('../models/task');
const asyncWrapper = require('../middlewares/async')
const { createCustomError } = require('../errors/custom-error')


const createTask = asyncWrapper( async (req, res)=>{
    
        const task = await Task.create(req.body)
        return res.status(201).json({success: true, data:task})    
})

const getAllTasks = asyncWrapper (async (req, res, next)=>{

        const tasks = await Task.find({});
        return res.status(200).json({success : true, data: tasks})    
})

const getTask = asyncWrapper(async(req, res, next)=>{
   
        const { id : taskId } = req.params
        const task = await Task.findOne({_id: taskId });
        console.log(task)
        if( !task){
            return next( createCustomError(`No task with id - ${taskId}`, 404));
        }
        return res.status(200).json({success:true, data : task})

})
const updateTask = asyncWrapper( async (req, res, next)=>{
        const { id : taskId} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskId}, req.body, { new :true, runValidators:true})
        if(!task){
            return next( createCustomError(`Task ID-${taskId} does not exist`, 404))}
        return res.status(200).json({success:true, data : task})
})

const deleteTask = asyncWrapper( async (req, res, next)=>{
   
    const { id : taskId } = req.params
    const task = await Task.findOneAndDelete({_id: taskId})
    if (!task){
        return next( createCustomError(`Task ID-${taskId} does not exist`, 404))
    }
    return res.status(200).json({succes:true, data:task})
 
})

module.exports = {
     getAllTasks,
     getTask,
     createTask,
     updateTask,
     deleteTask
}