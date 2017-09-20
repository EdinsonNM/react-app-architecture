import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import {App} from './components/app';

export const routes = (
    <Switch>
      <Route exact={true} path="/login" component={App} />
      <Route exact={true} path="/dashboard" component={App} />
    </Switch>
);
