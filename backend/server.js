const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5050;

//routes
const routes = require("./routes/toDoRoutes");

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
    res.json({ message: "hello project started" });
});
app.use("/api", routes);


// connection with database
mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("connected to database"))
    .catch((err) => { console.log("Error connecting to database", err) });

// establishing the server connection
app.listen(port, () => {
    console.log(`connected to port ${port}`);
});