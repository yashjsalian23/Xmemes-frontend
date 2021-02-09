import React, { useState } from 'react';

import Button from '../../ui/button/Button';

import './MemeComponent.css';

const MemeComponent = ({name, url, caption, id, fetchMemesFunc}) => {

    let [ editedUrl, setEditedUrl ] = useState(url);
    let [ editedName, setEditedName ] = useState(name);
    let [ editedCaption, setEditedCaption ] = useState(caption);
    let [ showForm, setShowForm ] = useState(true);

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
            fetchMemesFunc();
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

    let editForm = showForm? <React.Fragment>
        <form onSubmit={editMemeHandler}>
            <input type="text" value={editedCaption} onChange={(e) => setEditedCaption(e.target.value)} />
            <Button type="submit">Submit</Button>
        </form>
    </React.Fragment>:null

    return (
        <div className="meme">
            <p className="meme-name">{name}</p>
            <img src={url} alt={caption} />
            <div className="meme-btn">
                <Button clicked={() => setShowForm(true)} color="green" size="small">Edit</Button> 
                <Button clicked={deleteMemeHandler} color="red" size="small">Delete</Button>
            </div>
            <p className="meme-caption">{caption}</p>
            <hr style={{fontWeight:500}} />
            {/* { editForm} */}
        </div>
    );
};

export default MemeComponent;