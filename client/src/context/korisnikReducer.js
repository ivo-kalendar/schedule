import { GET_KORISNICI, GET_USER, CLEAR_USER, EDIT_USER } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                errorKorisnik: null,
            };
        case GET_KORISNICI:
            return {
                ...state,
                korisnici: action.payload,
                errorKorisnik: null,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: '',
                korisnici: null,
                errorKorisnik: action.payload,
            };
        case EDIT_USER:
            return {
                ...state,
                editKorisnik: action.payload,
            };
        default:
            return state;
    }
};
