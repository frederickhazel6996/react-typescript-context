import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieProvider } from './context/movie-context';
import App from './app';
import './_scss/index.scss';

const root = document.getElementById('root');

ReactDOM.render(
    <Router>
        <MovieProvider>
            <App />
        </MovieProvider>
    </Router>,
    root
);
