import React from 'react';

import Header from '../components/header/Header';
import MemeList from '../components/memes';

const homepage = () => {
    return (
        <div>
            <Header />
            <MemeList />
        </div>
    );
};

export default homepage;