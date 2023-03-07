const Task = require('../models/task')


const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        return res.status(201).json({success: true, data:task})
    }
    catch(err){
       return res.status(500).json({success: false, message: err})
    }
    
}
const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({success : true, data: tasks})
    }
    catch(err){
        res.status(404).json({success:false, data:err})
    }
}
const getTask = async(req, res)=>{
    try{
        const { id : taskId } = req.params
        const task = await Task.findOne({_id: taskId });
        console.log(task)
        if( !task){
            return res.status(404).json({success:false, message: `Task ID-${id} does not exist`});
        }
        return res.status(200).json({success:true, data : task})
    }
    catch(err){
       return res.status(500).json({success:false, message :err})
    }
}
const updateTask = async (req, res)=>{
    try {
        const { id : taskId} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskId}, req.body, { new :true, runValidators:true})
        if(!task){
            return res.status(404).json({success:false, message: `Task ID-${id} does not exist`});
        }
        return res.status(200).json({success:true, data : task})
    }
    catch(err){
        return res.status(500).json({success:false, message :err})
    }
}
const deleteTask = async (req, res)=>{
   try{
    const { id : taskId } = req.params
    const task = await Task.findOneAndDelete({_id: taskId})
    if (!task){
        return res.status(404).json({success : false, message : `Task ID-${taskId} does not exist`})
    }
    return res.status(200).json({succes:true, data:task})
   }
   catch(err){
    return res.status(500).json({success:false, message:err})
   }
}

module.exports = {
     getAllTasks,
     getTask,
     createTask,
     updateTask,
     deleteTask
}