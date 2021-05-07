import { GET__COURSES } from "./courseTypes"
import Axios from 'axios'

export const getCourses=(courseInfo)=>{
    return{
        type: GET__COURSES,
        payload: courseInfo
    }
}


export const fetchCourseInfo= ()=>{
    return(dispatch)=>{
         Axios.get("/get-courses", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("auth_token"),
            }
    })
    .then(result=>{
        dispatch(getCourses(result.data.courses))
        //console.log(result.data.courses)
    })
    .catch(err=>{
        console.log(err)
    })
    //console.log(courseData)
}
}