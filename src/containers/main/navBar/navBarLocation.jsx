import React from 'react';

const NavBarLocation = props => (
    <ul className="nav navbar-toolbar">
        <li className="nav-item hidden-float" id="toggleMenubar">
            <a className="nav-link" data-toggle="menubar">
                <i className="icon hamburger hamburger-arrow-left">
                    <span className="sr-only">Toggle menubar</span>
                    <span className="hamburger-bar" />
                </i>
            </a>
        </li>
        <li className="nav-item hidden-sm-down" id="toggleFullscreen">
            <a className="nav-link icon icon-fullscreen" data-toggle="fullscreen">
                <span className="sr-only">Toggle fullscreen</span>
            </a>
        </li>
        <li className="nav-item hidden-float">
            <a className="nav-link icon wb-search" data-toggle="collapse" data-target="#site-navbar-search">
                <span className="sr-only">Toggle Search</span>
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" aria-expanded="false" data-animation="fade" role="button"><strong>Period:</strong> {  /* AppMonthCalendar.monthNames[month - 1] */} {props.year} <i className="icon wb-chevron-down-mini" aria-hidden="true" /></a>
            <div className="dropdown-menu dropdown-menu-primary dropdown-menu-calendar" role="menu">
                <div className="container-fluid">
                    {/* <AppMonthCalendar onChange={this.changeCalendar} month={month} year={year}/>*/}
                </div>
            </div>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" aria-expanded="false" data-animation="fade" role="button"><strong>Store:</strong> Acura <i className="icon wb-chevron-down-mini" aria-hidden="true" /></a>
            <div className="dropdown-menu dropdown-menu-primary" role="menu">
                <a hre="#" className="dropdown-item" role="menuitem"><em>Select a Store</em></a>
                <a hre="#" className="dropdown-item" role="menuitem">Acura</a>
                <a hre="#" className="dropdown-item" role="menuitem">Hyundai</a>
                <a hre="#" className="active dropdown-item" role="menuitem">KC</a>
                <a hre="#" className="dropdown-item" role="menuitem">Honda</a>
                <a hre="#" className="dropdown-item" role="menuitem">Corporate</a>
                <a hre="#" className="dropdown-item" role="menuitem">CDJ</a>
            </div>
        </li>
        <li className="nav-item dropdown">
            <a hre="#" className="nav-link" data-toggle="dropdown" aria-expanded="false" data-animation="fade" role="button">
                <strong>Location:</strong> All <i className="icon wb-chevron-down-mini" aria-hidden="true" />
            </a>
            <div className="dropdown-menu dropdown-menu-primary" role="menu">
                <a hre="#" className="dropdown-item" role="menuitem"><em>Select a Location</em></a>
                <a hre="#" className="dropdown-item" role="menuitem">CDJ</a>
                <a hre="#" className="dropdown-item" role="menuitem">All</a>
            </div>
        </li>

    </ul>
);

export default NavBarLocation;
