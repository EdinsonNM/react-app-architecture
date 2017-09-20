import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from './components/app';

const routes = (
    <Switch>
        <Route exact path="/login" component={App} />
        <Route exact path="/dashboard" component={App} />
    </Switch>
);

export default routes;
