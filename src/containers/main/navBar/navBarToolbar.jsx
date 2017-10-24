import React from 'react';
import classnames from 'classnames';
import NavBarSearch from './navBarSearch';
import NavBarRight from './navBarRight';
import NavBarLocation from './navBarLocation';

const NavBarToolbar = props => (
    <div className="navbar-container container-fluid">
        <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
            <NavBarLocation />
            <NavBarRight />
        </div>

        <NavBarSearch />
    </div>
);

export default NavBarToolbar;
