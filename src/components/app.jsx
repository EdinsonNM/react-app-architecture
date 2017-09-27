import React from 'react';
import PropTypes from 'prop-types';
import Perf from 'react-addons-perf';

if (typeof window !== 'undefined') window.Perf = Perf;

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
