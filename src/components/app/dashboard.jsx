import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../../containers/main/main';
import Users from '../../containers/users/users';

export default class Dashboard extends React.PureComponent {
    render() {
        return (
            <Main>
                <div>
                    <Switch>
                        <Route path="/dashboard/users" component={Users} />
                    </Switch>
                </div>
            </Main>
        );
    }
}
