//pw=Bbyyc6t964353ENh

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/userRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:Bbyyc6t964353ENh@cluster0.8ax0z5j.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));