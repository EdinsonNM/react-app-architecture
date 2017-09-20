import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.querySelector('#root')
);
