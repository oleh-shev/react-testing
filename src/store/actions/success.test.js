import { correctGuess } from './success';
import { actionTypes } from "./actionTypes";

describe('correctGuess', () => {
    it('should return an action with type CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});