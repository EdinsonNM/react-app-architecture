import React from 'react';
import PropTypes from 'prop-types';
export class App extends React.Component{
    static propTypes = {
        title: PropTypes.string
    }
    constructor(){
        super();
    }
    render() {
        return <div>My First App {this.props.title}</div>
    }
}