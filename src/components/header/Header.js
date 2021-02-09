import React, { useState } from 'react';

import Button from '../ui/button/Button';
import Modal from '../ui/modal/Modal';

import './Header.css';

const Header = ({fetchMemesFunc}) => {

    let [ showModal, setShowModal ] = useState(false);
    let [ caption, setCaption ] = useState();
    let [ name, setName ] = useState();
    let [ url, setUrl ] = useState();
    let [ message, setMessage ] = useState();
    let [ showForm, setShowForm ] = useState(true);

    let newMemeHandler = async (event) => {
        event.preventDefault();
        let body = {
            url,
            name,
            caption
        };

        let response = await fetch('http://localhost:8081/memes',{
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        let res = await response.json();
        if(res.id){
            setShowForm(false);
            setMessage('Meme Posted Successfully!');
            fetchMemesFunc();
            await setTimeout(() => {
                setShowModal(false);
                setShowForm(true);
            }, 3500);
        } else {
            setMessage('Unable to post Meme');
            await setTimeout(() => {
                setShowModal(false);
                setShowForm(true);
            }, 3500);
        }
    }

    let form = showForm ?  (<React.Fragment>
        <form onSubmit={newMemeHandler}>
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
        </React.Fragment>) : <p>{message}</p>
        
    
    console.log(message)
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