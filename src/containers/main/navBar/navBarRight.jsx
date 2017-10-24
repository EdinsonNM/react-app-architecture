import React from 'react';

const NavBarRight = props => (
    <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
        <li className="nav-item dropdown">
            <a className="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="scale-up" role="button">
                <span className="avatar avatar-online">
                    <img src="images/default-user-avatar.jpg" alt="..." />
                    <i />
                </span>
            </a>
            <div className="dropdown-menu" role="menu">
                <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i className="icon wb-user" aria-hidden="true" /> Profile</a>
                <a className="dropdown-item" href="javascript:void(0)" role="menuitem"><i className="icon wb-settings" aria-hidden="true" /> Settings</a>
                <div className="dropdown-divider" role="presentation" />
                <a className="dropdown-item" href="#" role="menuitem" onClick={props.logout}>
                    <i className="icon wb-power" aria-hidden="true" />
                    Logout
                </a>
            </div>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications" aria-expanded="false" data-animation="scale-up" role="button">
                <i className="icon wb-bell" aria-hidden="true" />
                <span className="badge badge-pill badge-danger up">5</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                <div className="dropdown-menu-header">
                    <h5>NOTIFICATIONS</h5>
                    <span className="badge badge-round badge-danger">New 5</span>
                </div>
                <div className="list-group">
                    <div data-role="container">
                        <div data-role="content">
                            <a className="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                    <div className="pr-10">
                                        <i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">A new order has been placed</h6>
                                        <time className="media-meta">5 hours ago</time>
                                    </div>
                                </div>
                            </a>
                            <a className="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                    <div className="pr-10">
                                        <i className="icon wb-user bg-green-600 white icon-circle" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Completed the task</h6>
                                        <time className="media-meta" >2 days ago</time>
                                    </div>
                                </div>
                            </a>
                            <a className="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                    <div className="pr-10">
                                        <i className="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Settings updated</h6>
                                        <time className="media-meta">2 days ago</time>
                                    </div>
                                </div>
                            </a>
                            <a className="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                    <div className="pr-10">
                                        <i className="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Event started</h6>
                                        <time className="media-meta">3 days ago</time>
                                    </div>
                                </div>
                            </a>
                            <a className="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                    <div className="pr-10">
                                        <i className="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Message received</h6>
                                        <time className="media-meta">3 days ago</time>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="dropdown-menu-footer">
                    <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                        <i className="icon md-settings" aria-hidden="true" />
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">
                        All notifications
                    </a>
                </div>
            </div>
        </li>

    </ul>
);

export default NavBarRight;
