import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    constructor() {
        super();
        this.state = {
            x: 1
        };
    }

    render() {
        return (
            <div>My First App {this.props.title}</div>
        );
    }
}
