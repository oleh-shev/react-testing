import {compose, createStore} from "redux";
import rootReducer from './reducers/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default createStore(rootReducer, composeEnhancers());