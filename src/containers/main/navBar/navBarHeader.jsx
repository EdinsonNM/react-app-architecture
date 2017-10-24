import React from 'react';
import classnames from 'classnames';

const NavBarHeader = props => (
    <div className="navbar-header">
        <button type="button" className={classnames('navbar-toggler hamburger hamburger-close navbar-toggler-left', { hided: props.openMenu })} data-toggle="menubar" onClick={this.toggleMenu}>
            <span className="sr-only">Toggle navigation</span>
            <span className="hamburger-bar" />
        </button>
        <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
            <i className="icon wb-more-horizontal" aria-hidden="true" />
        </button>
        <a className="navbar-brand navbar-brand-center" href="#/mydashboard">
            <app-logo size="sm" className="navbar-brand-logo navbar-brand-logo-normal" style={{ display: 'inline-flex' }} />
            <span className="navbar-brand-text hidden-xs-down"> DealerWork</span>
        </a>
        <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
            <span className="sr-only">Toggle Search</span>
            <i className="icon wb-search" aria-hidden="true" />
        </button>
    </div>
);

export default NavBarHeader;
