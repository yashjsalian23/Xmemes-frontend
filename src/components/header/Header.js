import React from 'react';

import Button from '../ui/button/Button';

import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><a href="/">Xmemes</a></span>
                <span>
                    <Button className="mr-sm-2">New Meme</Button>
                </span>
            </nav>
        </div>
    );
};

export default Header;