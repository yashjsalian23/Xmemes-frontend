import React from 'react';

import './Button.css';

const Button = ({children, color="primary", size, clicked}) => {
    return (
        <button className={`btn ${color} ${size}`} onClick={clicked} >
            {children}
        </button>
    );
};

export default Button;