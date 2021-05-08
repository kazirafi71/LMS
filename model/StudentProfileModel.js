
const mongoose =require('mongoose')

const studentProfileSchema=mongoose.Schema({
    userId:{
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
    ],
    attendance:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses"
        },
        {
            status:[
                {
                    type: String,
                    default:"not recorded"
                }
            ]
        }
    ]
},{
    timestamps:true
})

const StudentProfileModel=mongoose.model("StudentProfile",studentProfileSchema)

module.exports=StudentProfileModel