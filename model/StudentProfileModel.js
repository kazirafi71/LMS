
const mongoose =require('mongoose')

const studentProfileSchema=mongoose.Schema({
    info:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    profilePic:{
        type: String
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses"
        }
    ]
})