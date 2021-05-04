import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";


const rootReducer=combineReducers({
    auth: authReducer
})

export default rootReducer