import axios from 'axios';
import { actionTypes } from "./actionTypes";

export const getSecretWord = () => {
    return dispatch => {
        return axios.get('http://localhost:3030')
            .then(response => {
                dispatch({
                    type: actionTypes.SET_SECRET_WORD,
                    payload: response.data
                })
            });
    };
};