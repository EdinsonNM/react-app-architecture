import React from 'react';
import Sidebar from './sidebar';
import NavBar from './navBar/navBar';

const Main = props => (
    <div>
        <NavBar />
        <Sidebar />
        <div>
            {props.children}
        </div>
    </div>
);

export default Main;
