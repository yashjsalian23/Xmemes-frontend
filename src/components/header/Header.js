import React, { useState } from 'react';

import Button from '../ui/button/Button';
import Modal from '../ui/modal/Modal';

import './Header.css';

const Header = () => {

    let [ showModal, setShowModal ] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><a href="/">Xmemes</a></span>
                <span>
                    <Button className="mr-sm-2" clicked={() => setShowModal(true)}>New Meme</Button>
                </span>
            </nav>
            <Modal show={showModal} modalClosed={() => setShowModal(false)} title="New Meme">
                Hello
            </Modal>
        </div>
    );
};

export default Header;