import checkPropTypes from 'check-prop-types';
import {createStore} from "redux";
import rootReducer from '../store/reducers/index';

export const storeFactory = initialState => {
    return createStore(rootReducer, initialState);
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