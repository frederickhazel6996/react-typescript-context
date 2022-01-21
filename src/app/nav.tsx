import React, { useState, useContext } from 'react';
import RPT from 'prop-types';
import { MovieContext } from '../context/movie-context';
import './index.scss';

interface propsInterface {
    todo: string;
    time?: string;
    id: number;
    done: boolean;
}
interface movieInterface {
    name: string;
    rating: number;
    id: number;
}
const Index: React.FC = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div className="">
            <h2>Meister</h2>
            <h2>List of movies:{movies.length} </h2>
        </div>
    );
};

export default Index;
