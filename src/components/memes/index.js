import React, { useState, useEffect } from 'react';

import MemeComponent from './memeComponent/MemeComponent';

import './index.css';

const index = () => {

    let [ memeArray, setMemeArray ] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:8081/memes',{
            method: 'get'
        });

        const res = await response.json();
        setMemeArray(res);
    }, []);

    return (
        <div>
            {
                memeArray.map(meme => <MemeComponent key={meme.url} name={meme.name} url={meme.url} caption={meme.caption} />)
            }
        </div>
    );
};

export default index;