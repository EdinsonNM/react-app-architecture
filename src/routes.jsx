import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/app';
import Login from './containers/login';

const routes = (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={App} />
    </Switch>
);

export default routes;
