import React from 'react';
// import PropTypes from 'prop-types';
import { Login } from './login';

export default class App extends React.Component {
    /*
    static propTypes = {
        title: PropTypes.string.isRequired
    };
    */
    constructor() {
        super();
        this.state = {
            x: 1
        };
    }

    render() {
        return (
            <div>
                My First App
            </div>
        );
    }
}
