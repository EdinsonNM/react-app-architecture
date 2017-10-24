import React from 'react';
import NavBarHeader from './navBarHeader';
import NavBarToolbar from './navBarToolbar';

const NavBar = props => (
    <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse" >
        <NavBarHeader />
        <NavBarToolbar />
    </nav>
);

export default NavBar;
