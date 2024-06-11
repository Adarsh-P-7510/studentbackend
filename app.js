const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel} = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adarshp:beenasadu@cluster0.6nnmmnj.mongodb.net/studentapp?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{
    res.send("hello")

})
app.post("/Add",(req,res)=>{
    let input=req.body
    let student=new studentmodel(input)
    student.save()
    console.log(student)
    res.json({"status":"success"})
})
app.get("/ViewAll",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
    
})
app.listen(8082,()=>{
    console.log("server started")
})