import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/app/login';
import Dashboard from './components/app/dashboard';

const routes = (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default routes;
