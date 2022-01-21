import React, { useState } from 'react';
import './index.scss';
import MovieList from './movielist';
import Nav from './nav';

const index: React.FC = () => {
    return (
        <>
            <Nav />
            <MovieList />
        </>
    );
};

export default index;
