import { actionTypes } from "../actions/actionTypes";

const reducer = (state=[], action) => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        case actionTypes.CLEAR_GUESS_WORDS:
            return state = [];
        default:
            return state;
    }
};

export default reducer;