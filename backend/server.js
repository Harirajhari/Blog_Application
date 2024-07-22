const express = require("express");
const app = express();
require("dotenv").config();
const Db = require("./Database/DbConnect");
Db();
const UserRouter = require("./Router/UserRoute");
const UserAccessRouter = require("./Router/UserPostRoute");
const cookieParser = require ("cookie-parser");
const bodyParser = require("body-parser");
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

app.use("/",UserRouter);
app.use("/",UserAccessRouter);


const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server is running on");
})