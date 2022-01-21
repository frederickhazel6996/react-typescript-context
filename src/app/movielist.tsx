import React, { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RPT from 'prop-types';
import Nav from './nav';
import Movies from './movie';
import { ADD_MOVIE } from '../context/types';
import { MovieContext } from '../context/movie-context';
import './index.scss';

interface movieActionInterface {
    type: string;
    data: movieInterface;
}

interface movieInterface {
    name: string;
    rating: number;
    id: number;
}

const Index: React.FC = () => {
    const { movies, dispatch } = useContext(MovieContext);

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="btn  btn-primary btn-large"
                            onClick={(): void => {
                                dispatch({ type: ADD_MOVIE, data: { name: 'Batman', rating: 8, id: 4 } });
                            }}>
                            Add Movie
                        </div>
                        <div className="todobox mt-3">
                            {movies.map((movies: movieInterface) => (
                                <Movies
                                    key={movies.id}
                                    name={movies.name}
                                    rating={movies.rating}
                                    id={movies.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
