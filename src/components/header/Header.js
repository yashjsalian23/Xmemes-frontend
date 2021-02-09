import React, { useState } from 'react';

import Button from '../ui/button/Button';
import Modal from '../ui/modal/Modal';

import './Header.css';

const Header = () => {

    let [ showModal, setShowModal ] = useState(false);
    let [ caption, setCaption ] = useState();
    let [ name, setName ] = useState();
    let [ url, setUrl ] = useState();

    let form = <React.Fragment>
        <form>
            <input type="text"
            required
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption"/> <br/>

            <input type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"/> <br/>

            <input type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Image URL"/> <br/>

            <Button type="submit">
                Submit
            </Button>
        </form>
    </React.Fragment>

    return (
        <div>
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1"><a href="/">Xmemes</a></span>
                <span>
                    <Button className="mr-sm-2" clicked={() => setShowModal(true)}>New Meme</Button>
                </span>
            </nav>
            <Modal show={showModal} modalClosed={() => setShowModal(false)} title="New Meme">
                {form}
            </Modal>
        </div>
    );
};

export default Header;