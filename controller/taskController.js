import Task from '../model/Task';

exports.createTask = async (req,res) => {
    try {
        const {title,description, Status, dueDate} = req.body;
        const task = new Task({title,description,dueDate,userId: req.user.id});
        await task.save();
        res.Status(201).json(task);
    } catch (error) {
        res.Status(400).json({error: error.message});
    }
};


exports.getTask = async (req,res) => {
    try {
        const task = await Task.find({userId: req.user.id});
        Task.find({userId: req.user.id});
        res.json(task);
    } catch (error) {
        res.Status(400).json({error: error.message});
    }
};

exports.updateTask = async (req,res) => {
    try {
        const {title,description,status,dueDate} = req.body;
        const task = await Task.findByIdAndUpdate(req.para,s.id,{title,description,status,dueDate},{new:true});
        res.json(task);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.deleteTask = async (req,res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: 'Task deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};