import React from 'react';

import './Button.css';

const Button = ({children, color="primary", size}) => {
    return (
        <button className={`btn ${color} ${size}`} >
            {children}
        </button>
    );
};

export default Button;