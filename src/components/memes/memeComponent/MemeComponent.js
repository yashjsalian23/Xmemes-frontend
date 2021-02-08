import React from 'react';

const MemeComponent = ({name, url, caption}) => {
    return (
        <div>
            <p>{name}</p>
            <img src={url} alt={caption} />
            <p>{caption}</p>
        </div>
    );
};

export default MemeComponent;