const express = require("express");
const app = express();
require("dotenv").config();
const Db = require("./Database/DbConnect");
Db();

const UserRouter = require("./Router/UserRoute");

const bodyParser = require("body-parser");
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",UserRouter);


const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server is running on");
})