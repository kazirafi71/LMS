import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import courseReducer from "./course/courseReducer";


const rootReducer=combineReducers({
    auth: authReducer,
    course: courseReducer,
})

export default rootReducer