import { GET_KORISNICI, GET_USER, GET_ROUTES } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_ROUTES:
            return {
                ...state,
                routes: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                userID: action.payload,
            };
        case GET_KORISNICI:
            return {
                ...state,
                korisnici: action.payload,
            };
        default:
            return state;
    }
};
