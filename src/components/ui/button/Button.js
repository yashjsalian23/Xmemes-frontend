import React from 'react';

import './Button.css';

const Button = ({children, color="primary"}) => {
    return (
        <button className={`btn ${color}`} >
            {children}
        </button>
    );
};

export default Button;