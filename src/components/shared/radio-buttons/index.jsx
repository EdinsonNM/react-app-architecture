import React from 'react';

import css from './radio-buttons.css'

export default class RadioButtons extends React.Component {
    constructor (props) {
        super(props);
        this.activate = this.activate.bind(this);
    }

    activate(event) {
        this.props.change(event);
    }

    render() {
        return (
            <div className={this.props.containerCss}>
                {this.props.label ?
                    <label className={css.customSelect__label}>
                        {this.props.label}
                    </label>
                    : null
                }
                <div className="d-flex"
                     data-toggle="buttons">
                    {this.props.options.map((item, index) =>
                        { const isActive = this.props.value && (item.value === this.props.value || item === this.props.value);
                        return (
                        <label className={`col btn ${css.radioButton} ${isActive ? css.radioButton_active : ''} ${this.props.buttonCss}`}
                               key={index}>
                            <input type="radio"
                                   name={this.props.name}
                                   value={item.value || item}
                                   id={`radio-button-${index}`}
                                   onClick={this.activate}/>
                                {item.value || item}
                        </label>)}
                    )}
                </div>
                {this.props.error ? <label className={css.radioButton__errorLabel}>{this.props.error}</label>: null}
            </div>
        );
    }
}
