import React, { useState } from 'react';

import Button from '../../ui/button/Button';
import Modal from '../../ui/modal/Modal';
import Loader from '../../ui/loader/Loader';

import './MemeComponent.css';

const MemeComponent = ({name, url, caption, id, fetchMemesFunc}) => {

    let [ editedUrl, setEditedUrl ] = useState(url);
    let [ editedCaption, setEditedCaption ] = useState(caption);
    let [ showModal, setShowModal ] = useState(false);
    let [ showForm, setShowForm ] = useState(true);
    let [ message, setMessage ] = useState();
    let [ showLoader, setShowLoader ] = useState(false);

    let editMemeHandler = async (event) => {
        event.preventDefault();

        setShowLoader(true);
        let body ={
            url:editedUrl,
            caption:editedCaption
        };

        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/memes/${id}`,{
            method:'PATCH',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        setShowLoader(false);

        if(response.status === 200){
            setShowForm(false);
            setMessage('Meme Edited Successfully!');
            fetchMemesFunc();
            await setTimeout(() => {
                setShowModal(false);
                setShowForm(true);
            }, 3500);
        } else {
            setMessage('Unable to edit Meme');
            await setTimeout(() => {
                setShowModal(false);
                setShowForm(true);
            }, 3500);
        }
    }

    let deleteMemeHandler = async () => {
        const response = await fetch(`${process.env.REACT_APP_DOMAIN}/memes/${id}`,{
            method: "DELETE"
        });

        if(response.status === 200){
            fetchMemesFunc();
        }
    }

    // show loader if there is a request in process or else show tex
    let btnContent = showLoader ? <Loader /> : 'Submit';

    // content of modal. If a request is made the show the appropiate message instead of form
    let editForm = showForm ? (<React.Fragment>
        <form onSubmit={editMemeHandler}>
            <input type="text"
            required
            value={editedCaption}
            autoFocus
            onChange={(e) => setEditedCaption(e.target.value)}
            placeholder="Caption"/> <br/>

            <input type="text"
            required
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
            placeholder="Image URL"/> <br/>

            <Button type="submit">
                {btnContent}
            </Button>
        </form>
    </React.Fragment>) : <p>{message}</p>

    return (
        <div className="meme">
            <p className="meme-name">{name}</p>
            <img src={url} alt={caption} />
            <div className="meme-btn">
                <Button clicked={() => setShowModal(true)} color="green" size="small">Edit</Button> 
                <Button clicked={deleteMemeHandler} color="red" size="small">Delete</Button>
            </div>
            <p className="meme-caption">{caption}</p>
            <hr style={{fontWeight:500}} />
            <Modal show={showModal} modalClosed={() => setShowModal(false)} title="Edite Meme">
                {editForm}
            </Modal>
        </div>
    );
};

export default MemeComponent;