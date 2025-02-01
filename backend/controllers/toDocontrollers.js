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
        const { toDo } = req.body;
        if(!toDo || typeof toDo !== "string")
        {
            return res.status(400).json({ error: "Invalid task format. Expected a string." });
        }
        const newTask = await toDoModel.create({ toDo: toDo }); // Pass a string
        console.log("Task saved successfully");
        res.status(201).json(newTask);
    }
    catch(err) {console.log(err, "Error in saving the Task")};
}

module.exports = {getToDos, saveToDos};