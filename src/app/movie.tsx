import React, { useState } from 'react';
import RPT from 'prop-types';
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
const Index: React.FC<movieInterface> = ({ name, rating, id }) => {
    return (
        <div className="todo__container m-2">
            <h1>{name}</h1>
            <h1>{rating}</h1>
        </div>
    );
};

Index.propTypes = {
    name: RPT.string,
    rating: RPT.number,
    id: RPT.number
};

export default Index;
