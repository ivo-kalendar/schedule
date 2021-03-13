import { GET_KORISNICI, GET_USER, CLEAR_USER } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case GET_KORISNICI:
            return {
                ...state,
                korisnici: action.payload,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: '',
                korisnici: null,
            };
        default:
            return state;
    }
};
