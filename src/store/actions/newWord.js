import { actionTypes } from "./actionTypes";

export const newWord = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CLEAR_GUESS_WORDS
        });
        dispatch({
            type: actionTypes.NEW_GAME
        })
    }
}