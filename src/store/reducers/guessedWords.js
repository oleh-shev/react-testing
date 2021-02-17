import { actionTypes } from "../actions/actionTypes";

const reducer = (state=[], action) => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default reducer;