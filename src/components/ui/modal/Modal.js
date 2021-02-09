import React from 'react';
import Backdrop from '../backdrop/Backdrop';
import Button from '../button/Button';

import './Modal.css';

const Modal = (props) =>{
    return <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className='Modal'
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
            }}>
        <p className="Modal-title">{props.title}</p>
        <hr/>
        <div>{props.children}</div>
        <br/>
        <Button clicked={props.modalClosed} color="red" size="small">Cancel</Button>
        </div>
    </React.Fragment>
};

export default Modal;