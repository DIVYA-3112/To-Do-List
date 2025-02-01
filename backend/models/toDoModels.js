const mongoose = require("mongoose");

const toDoSchemas = new mongoose.Schema({
    toDo : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("toDo", toDoSchemas, "todos");