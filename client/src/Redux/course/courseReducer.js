import { GET__COURSES, UPDATE__COURSE__LIST } from "./courseTypes"

const init={
    courseInfo:[],
    updateCourseList: false,
    
}


const courseReducer=(state=init,action)=>{
    
    switch(action.type){
        case GET__COURSES: return{
            ...state,
            courseInfo: action.payload
        }
        case UPDATE__COURSE__LIST: return{
            ...state,
            updateCourseList: action.payload
        }

        default : return state
    }
}

export default courseReducer