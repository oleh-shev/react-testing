import success from "./success";
import { actionTypes } from "../actions/actionTypes";

describe('Success reducer', () => {
    it('should return initial state of false when no action is passed', () => {
        const newState = success(undefined, {});
        expect(newState).toBe(false);
    });

    it('should return state of true upon receiving an action type CORRECT_GUESS', () => {
        const newState = success(undefined, {type: actionTypes.CORRECT_GUESS});
        expect(newState).toBe(true);
    });
});