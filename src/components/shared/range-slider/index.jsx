import React from 'react';

import css from './range-slider.css'

export default class RangeSlider extends React.Component {
    constructor (props) {
        super(props);
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
                <input type="range"
                       min={this.props.min || 0}
                       max={this.props.max}
                       step={this.props.step || 1}
                       value={this.props.value}
                       onChange={this.props.change}
                       id={this.props.id}/>
                <div className="d-flex justify-content-between">
                    {this.props.options ? this.props.options.map((item, index) => {
                        const isActive = Number(this.props.value) === index;
                        return (
                        <span className={`col ${isActive ? css.rangeSliderItem_isActive: ''} ${css.rangeSliderItem}`} 
                              key={index}>{item}</span>)
                    }): null}
                </div>
                {this.props.error ? <label className={css.customSelect__errorLabel}>{this.props.error}</label>: null}
            </div>
        );
    }
}
