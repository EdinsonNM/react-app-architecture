import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment-timezone';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';
import './styles/index.css';

moment.locale('es');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.querySelector('#root')
);