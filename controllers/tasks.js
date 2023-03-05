const getAllTasks = (req, res)=>{
    res.json({success: true, data:[]} )
}
const getTask = (req, res)=>{
    res.json({success :true, data:"OK"})
}
const createTask = (req, res)=>{
    console.log(req.body)
    res.json({success :true, data:"OK"})
}
const updateTask = (req, res)=>{
    res.json({success :true, data:"OK"})
}
const deleteTask = (req, res)=>{
    res.json({success :true, data:"OK"})
}

module.exports = {
     getAllTasks,
     getTask,
     createTask,
     updateTask,
     deleteTask
}