import { combineReducers } from "redux";
import success from "./success";
import guessedWord from "./guessedWord";

const rootReducer = combineReducers({
    success: success,
    guessedWord: guessedWord
});

export default rootReducer;