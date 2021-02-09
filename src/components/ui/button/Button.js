import React from 'react';

import './Button.css';

const Button = ({children, color="primary", size, clicked, type}) => {
    return (
        <button className={`btn ${color} ${size}`} onClick={clicked} type={type} >
            {children}
        </button>
    );
};

export default Button;