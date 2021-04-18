import {
    GET_KORISNICI,
    GET_USER,
    CLEAR_USER,
    EDIT_USER,
    UPDATE_KORISNIK,
    ERROR_SUBMIT,
    DELETE_KORISNIK,
    CLEANUP,
} from './types';

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
                editKorisnik: null,
                korisnikOperation: null,
                errorUpdate: null,
            };
        case CLEANUP:
            return {
                ...state,
                errorKorisnik: null,
                editKorisnik: null,
                korisnikOperation: null,
                errorUpdate: null,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: '',
                editKorisnik: null,
                korisnici: null,
                korisnikOperation: null,
                errorUpdate: null,
                errorKorisnik: action.payload,
            };
        case EDIT_USER:
            return {
                ...state,
                editKorisnik: action.payload,
            };
        case UPDATE_KORISNIK:
            return {
                ...state,
                korisnikOperation: 'внесен',
            };
        case DELETE_KORISNIK:
            return {
                ...state,
                korisnikOperation: 'избришан',
            };
        case ERROR_SUBMIT:
            return {
                ...state,
                korisnikOperation: null,
                errorUpdate: action.payload,
            };
        default:
            return state;
    }
};
