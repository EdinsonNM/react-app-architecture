import React from 'react';

const NavBarSearch = () => (
    <div className="collapse navbar-search-overlap" id="site-navbar-search">
        <form role="search">
            <div className="form-group">
                <div className="input-search">
                    <i className="input-search-icon wb-search" aria-hidden="true" />
                    <input type="text" className="form-control" name="site-search" placeholder="Search..." />
                    <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close" />
                </div>
            </div>
        </form>
    </div>
);

export default NavBarSearch;
