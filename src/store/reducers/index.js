import { combineReducers } from "redux";
import success from "./success";

const rootReducer = combineReducers({
    success: success
});

export default rootReducer;