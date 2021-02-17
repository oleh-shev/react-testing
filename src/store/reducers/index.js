import { combineReducers } from "redux";
import success from "./success";
import guessedWords from "./guessedWords";
import secretWord from "./secretWord";

const rootReducer = combineReducers({
    guessedWords,
    secretWord,
    success
});

export default rootReducer;