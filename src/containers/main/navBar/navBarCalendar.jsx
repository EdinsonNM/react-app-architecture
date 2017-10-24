import * as classnames from 'classnames';
import React from 'react';

export default class NavBarCalendar extends React.PureComponent {
    static monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    constructor(props) {
        super(props);
        this.state = {
            year: props.year || (new Date()).getFullYear(),
            month: props.month || (new Date()).getMonth() + 1
        };
        this.changeMonth = this.changeMonth.bind(this);
        this.incrementYear = this.incrementYear.bind(this);
        this.decrementYear = this.decrementYear.bind(this);
        this.getToday = this.getToday.bind(this);
    }
    getMonth() {
        return this.state.month;
    }
    getYear() {
        return this.state.year;
    }
    getToday() {
        const self = this;
        const date = new Date();
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return `${day} ${NavBarCalendar.monthNames[monthIndex]} ${year}`;
    }
    changeMonth(month, e) {
        const { year } = this.state;
        e.stopPropagation();
        this.setState({ month });
        this.props.onChange(month, year);
    }



    incrementYear(e) {
        const { year, month } = this.state;
        this.setState({ year: year + 1 });
        this.props.onChange(month, year + 1);
        e.stopPropagation();
    }
    decrementYear(e) {
        const { year, month } = this.state;
        if (year > 1900) {
            this.setState({ year: year - 1 });
            this.props.onChange(month, year - 1);
        }
        e.stopPropagation();
    }

    renderMonths() {
        const { month } = this.state;
        const months = NavBarCalendar.monthNames.map((item, index) => {
            const monthNumber = index + 1;
            return (
                <div className="col-4 month" key={`month-${monthNumber}`}>
                    <a onClick={this.changeMonth.bind(this, monthNumber)} className={classnames({ active: (month === monthNumber) })}>{item}</a>
                </div>
            );
        });
        return <div className="row">{months}</div>;
    }


    render() {
        const { year } = this.state;
        return (
            <div className="container-fluid">
                <div className="year">
                    <div onClick={this.decrementYear}><a><span className="icon wb-chevron-left" /></a></div>
                    <div className="year-value"><h2>{year}</h2></div>
                    <div><a onClick={this.incrementYear}><span className="icon wb-chevron-right" /></a></div>
                </div>
                {this.renderMonths()}
                <hr />
                <div className="today"><strong>Today:</strong> <span>{this.getToday()}</span></div>
            </div>
        );
    }
}
