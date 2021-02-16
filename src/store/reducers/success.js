import { actionTypes } from "../actions/actionTypes";

const reducer = (state=false, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true;
        default:
            return state;
    }
}

export default reducer;