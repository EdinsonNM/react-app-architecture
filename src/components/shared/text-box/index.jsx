import React from 'react';

import css from './text-box.css'

export default class TextBox extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.containerCss}`}>                
                <label className={css.textBox__label}>
                    {this.props.label}
                </label>
                <input value={this.props.value}
                       maxLength={this.props.maxLength} 
                       className={`form-control ${css.textBox__text}`}
                       type={this.props.type}
                       onInput={this.props.change}
                       id={this.props.id}/>
                {this.props.error ? <label className={css.textBox__errorLabel}>{this.props.error}</label>: null}
            </div>
        );
    }
}