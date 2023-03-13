const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017', {dbName: "Discers"});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

const courseRouter = require('./routes/course');
const userRouter = require('./routes/user');
app.use('/courses', courseRouter);
app.use('/users', userRouter);
 
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});