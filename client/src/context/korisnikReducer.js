import { GET_KORISNICI } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_KORISNICI:
            return {
                ...state,
                korisnici: action.payload,
            };
        default:
            return state;
    }
};
