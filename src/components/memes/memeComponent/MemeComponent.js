import React from 'react';

import './MemeComponent.css';

const MemeComponent = ({name, url, caption}) => {
    return (
        <div className="meme">
            <p className="meme-name">{name}</p>
            <img src={url} alt={caption} />
            <p className="meme-caption">{caption}</p>
            <hr style={{fontWeight:500}} />
        </div>
    );
};

export default MemeComponent;