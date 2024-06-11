const mongoose = require("mongoose")
const schema =  mongoose.Schema(

    {
        "name":String,
        "rollno":String,
        "admn": String,
        "college":String
    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}