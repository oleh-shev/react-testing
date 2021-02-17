import { actionTypes } from "./actionTypes";
import { getLetterMatchCount } from "../../utils";

export const guessWord = (guessedWord) => {
    return function (dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        });

        if (guessedWord === secretWord) {
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    };
};