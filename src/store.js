import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { AxiosMiddleware } from './libs/api';
import reducer from './reducer';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(AxiosMiddleware);
    }

    // Enable additional logging in non-production environments.
    return applyMiddleware(AxiosMiddleware, createLogger())
};

const store = createStore(reducer, composeWithDevTools(getMiddleware()))

export default store;
