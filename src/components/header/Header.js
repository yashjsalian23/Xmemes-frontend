import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar">
                <span class="navbar-brand mb-0 h1"><a href="/">Xmemes</a></span>
            </nav>
        </div>
    );
};

export default Header;