import { ADD_MOVIE } from './types';

interface movieInterface {
    name: string;
    rating: number;
    id: number;
}

interface movieActionInterface {
    type: string;
    data: movieInterface;
}
export const movieReducer = (state: movieInterface[], action: movieActionInterface): movieInterface[] => {
    switch (action.type) {
        case ADD_MOVIE:
            state = state.concat(action.data);
            return state;

        default:
            return state;
    }
};
