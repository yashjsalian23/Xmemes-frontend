import React from 'react';

import './Backdrop.css';

const backdrop = ({show, clicked}) => {
    return show ? <div onClick={clicked} className='backdrop'></div> : null;
}

export default backdrop;