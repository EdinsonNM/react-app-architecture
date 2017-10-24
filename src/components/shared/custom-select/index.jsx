import React from 'react';

import css from './custom-select.css'

export default class CustomSelect extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.containerCss}>
                <label className={css.customSelect__label}>
                    {this.props.label}
                </label>
                <select className={`form-control ${css.customSelect__select}`} 
                        value={this.props.value}
                        onChange={this.props.change}
                        id={this.props.id}>
                    <option value="" disabled="false">{this.props.defaultOption}</option>
                    {this.props.options ? this.props.options.map((item, index) => 
                        <option key={index}
                                value={item.id || item.value || item}>{item.id || item.value || item}
                        </option>
                    ): null}
                </select>
                {this.props.error ? <label className={css.customSelect__errorLabel}>{this.props.error}</label>: null}
            </div>
        );
    }
}
