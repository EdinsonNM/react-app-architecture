import React from 'react';
import css from './card.css';

export default class Card extends React.Component {
    render() {
        return (
            <div className={`${this.props.classes} ${css.card}`}>
                {this.props.children}
            </div>
        );
    }
}
