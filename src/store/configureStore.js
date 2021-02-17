import { applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const middlewares = [thunk];

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);