const Router = require("express");
const toDoModel = require("../models/toDoModels");

const router = Router();

const getToDos = async (req, res) => {
    const gettoDos = await toDoModel.find();
    res.send(gettoDos);
};

const saveToDos = async (req, res) => {
    try
    {
        const {toDo}  = req.body;
        console.log(req.body);
        if(!toDo || typeof toDo !== "string")
        {
            return res.status(200).json({ error: "Invalid task format. Expected a string." });
        }
        const newTask = await toDoModel.create({ toDo: toDo }); // Pass a string
        console.log("Task saved successfully");
        res.status(201).json(newTask);
    }
    catch(err) {console.log(err, "Error in saving the Task")};
}


const updateToDos = async (req,res) => {
    try
    {
        const {id} = req.params; 
        console.log(id);
        const {toDo} = req.body;

        const updatedTask = await toDoModel.findByIdAndUpdate(id, {toDo}, {new : true});

        if(!updatedTask) return res.status(404).json({message : "Task not found"});
        res.status(200).json({message : "task updated successfully", updatedTask});
        // toDoModel.findByIdAndUpdate({id}, {toDo});
    }
    catch(err) {console.log(err, "unable to update Task")};
}

const deleteToDos = async (req, res) => {
    try{

        const {id} = req.params;
        const findTask = await toDoModel.findOne({_id : id});
        if(!findTask) return res.status(404).json({message : `task with id - ${id} does not exist`});
        const deleteTask = await toDoModel.findByIdAndDelete(id);
        if(!deleteTask) return res.status(404).json("Task delete failed");
        res.status(200).json({message : "task deleted successfully", deleteTask});
    }
    catch (err) {console.log(err, "unable to delete task")};
};

module.exports = {getToDos, saveToDos, updateToDos, deleteToDos};