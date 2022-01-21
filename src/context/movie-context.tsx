import React, { useState, createContext, Dispatch, SetStateAction, useReducer, useEffect } from 'react';
import { movieReducer } from './reducers';
import { ADD_MOVIE } from './types';
import RPT from 'prop-types';

interface movieActionInterface {
    type: string;
    data: movieInterface;
}
interface movieInterface {
    name: string;
    rating: number;
    id: number;
}
interface movieContextInterface {
    movies?: movieInterface[];
    dispatch?: Dispatch<movieActionInterface>;
}

export const MovieContext = createContext<movieContextInterface>({});
export const MovieProvider: React.FC = ({ children }): JSX.Element => {
    const [movies, dispatch] = useReducer(
        movieReducer,
        [
            { name: 'Lord of the Rings', rating: 8, id: 1 },
            { name: 'Avengers', rating: 10, id: 2 }
        ],
        () => {
            const storedMovies = sessionStorage.getItem('movies');
            return storedMovies ? JSON.parse(storedMovies) : [];
        }
    );
    useEffect(() => {
        sessionStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    return <MovieContext.Provider value={{ movies, dispatch }}>{children}</MovieContext.Provider>;
};

MovieProvider.propTypes = { children: RPT.any };
