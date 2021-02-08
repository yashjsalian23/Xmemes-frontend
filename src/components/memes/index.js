import React, { useState, useEffect } from 'react';

import MemeComponent from './memeComponent/MemeComponent';

import './index.css';

const index = () => {

    let [ memeArray, setMemeArray ] = useState([]);

    useEffect(async () => {
        fetchMemes();
    }, []);

    let fetchMemes = async () => {
        const response = await fetch('http://localhost:8081/memes',{
            method: 'get'
        });

        const res = await response.json();
        setMemeArray(res);
    }

    return (
        <div className="memeList">
            <div>
                {
                    memeArray.map(meme => <MemeComponent
                        key={meme.id} 
                        id={meme.id} 
                        name={meme.name} 
                        url={meme.url} 
                        caption={meme.caption}
                        fetchMemesFunc={fetchMemes} />)
                }
            </div>
        </div>
    );
};

export default index;