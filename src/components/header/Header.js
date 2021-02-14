import React, { useState } from 'react';

import Button from '../ui/button/Button';
import Modal from '../ui/modal/Modal';
import Loader from '../ui/loader/Loader';

import './Header.css';

const Header = ({fetchMemesFunc}) => {

    let [ showModal, setShowModal ] = useState(false);
    let [ caption, setCaption ] = useState();
    let [ name, setName ] = useState();
    let [ url, setUrl ] = useState();
    let [ message, setMessage ] = useState();
    let [ showForm, setShowForm ] = useState(true);
    let [ showLoader, setShowLoader ] = useState(false);

    let newMemeHandler = async (event) => {
        setShowLoader(true);

        event.preventDefault();

        let body = {
            url,
            name,
            caption
        };

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/memes`,{
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        let res = await response.json();

        setShowLoader(false);

        if(res.id){
            setShowForm(false);
            setMessage('Meme Posted Successfully!');
            fetchMemesFunc();
        } else if(response.status === 409){
            setShowForm(false);
            setMessage('Meme exists');
        } else {
            setShowForm(false);
            setMessage('Unable to post Meme');
        }
        await setTimeout(() => { //adding a timeout so that user can read the message and then modal closes
            setShowModal(false);
            setShowForm(true);
        }, 2500);
        // resetting input fields so that when modal is opened again the previous data is removed
        setCaption('');
        setName('');
        setUrl('');
    }

    let btnContent = showLoader ? <Loader /> : 'Submit'; // show loader if there is a request in process or else show text

    // content of modal. If a request is made the show the appropiate message instead of form
    let form = showForm ?  (<React.Fragment>
        <form onSubmit={newMemeHandler}>
            <input type="text"
            required
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            autofocus
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
                {btnContent}
            </Button>
        </form>
        </React.Fragment>) : <p>{message}</p>
        
    return (
        <div>
            <nav className="navbar">
                {/* brand name */}
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