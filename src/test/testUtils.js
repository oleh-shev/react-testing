import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from "redux";

import rootReducer from '../store/reducers/index';
import { middlewares } from "../store/configureStore";

export const storeFactory = initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
};

export const findByTestAtrr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};