import React, { useState } from 'react';

import Button from '../../ui/button/Button';
import Modal from '../../ui/modal/Modal';

import './MemeComponent.css';

const MemeComponent = ({name, url, caption, id, fetchMemesFunc}) => {

    let [ editedUrl, setEditedUrl ] = useState(url);
    let [ editedName, setEditedName ] = useState(name);
    let [ editedCaption, setEditedCaption ] = useState(caption);
    let [ showModal, setShowModal ] = useState(false);
    let [ showForm, setShowForm ] = useState(true);
    let [ message, setMessage ] = useState();


    let editMemeHandler = async (event) => {
        event.preventDefault();
        let body ={
            url:editedUrl,
            caption:editedCaption,
            name:editedName
        };
        const response = await fetch(`http://localhost:8081/memes/${id}`,{
            method:'PATCH',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const res = await response.json();
        if(res.success){
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
        const response = await fetch(`http://localhost:8081/memes/${id}`,{
            method: "DELETE"
        });

        const res = await response.json();
        if(res.success){
            fetchMemesFunc();
        }
    }

    let editForm = showForm ? (<React.Fragment>
        <form onSubmit={editMemeHandler}>
            <input type="text"
            required
            value={editedCaption}
            onChange={(e) => setEditedCaption(e.target.value)}
            placeholder="Caption"/> <br/>

            <input type="text"
            required
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Name"/> <br/>

            <input type="text"
            required
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
            placeholder="Image URL"/> <br/>

            <Button type="submit">
                Submit
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