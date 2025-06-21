//pw=Bbyyc6t964353ENh

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/",(req, res, next) => {
    res.send("It Is Working....")
})

mongoose.connect("mongodb+srv://admin:Bbyyc6t964353ENh@cluster0.8ax0z5j.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));