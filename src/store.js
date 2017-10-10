import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { AxiosMiddleware } from './libs/api';
import reducer from './reducer';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(AxiosMiddleware, epicMiddleware);
    }

    // Enable additional logging in non-production environments.
    return applyMiddleware(AxiosMiddleware, epicMiddleware, createLogger());
};

const store = createStore(reducer, composeWithDevTools(getMiddleware()));

export default store;
