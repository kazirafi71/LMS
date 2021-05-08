
const mongoose =require('mongoose')

const CourseEnrollSchema=mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses"
        }
    ],
    
},{
    timestamps:true
})

const CourseEnrollModel=mongoose.model("EnrollCourses",CourseEnrollSchema)

module.exports=CourseEnrollModel