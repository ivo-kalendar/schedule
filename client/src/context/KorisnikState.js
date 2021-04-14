import { useReducer } from 'react';
import axios from 'axios';
import KorisnikContext from './korisnikContext';
import korisnikReducer from './korisnikReducer';
import { CLEAR_USER, GET_KORISNICI, GET_USER, EDIT_USER } from './types';

const KorisnikState = (props) => {
    const initialState = {
        korisnici: null,
        user: '',
        errorKorisnik: null,
        editKorisnik: null,
    };

    const [state, dispatch] = useReducer(korisnikReducer, initialState);

    // Get User //
    const getUser = async (id) => {
        try {
            const res = await axios.get(`/api/user/${id}`);

            dispatch({ type: GET_USER, payload: res.data });
        } catch (error) {
            dispatch({ type: CLEAR_USER, payload: error.response.data });
        }
    };

    // Get Korisnici //
    const getKorisnici = async () => {
        try {
            const res = await axios.get('/api/allusers');
            // res.data.length = 50;

            dispatch({ type: GET_KORISNICI, payload: res.data });
        } catch (error) {
            console.log(error, 'од овде е еророт...02');
        }
    };

    // Edit Korisnik //
    const editUser = (user) => dispatch({ type: EDIT_USER, payload: user });

    // Logout //
    const clearUser = () => dispatch({ type: CLEAR_USER });

    return (
        <KorisnikContext.Provider
            value={{
                editKorisnik: state.editKorisnik,
                user: state.user,
                korisnici: state.korisnici,
                errorKorisnik: state.errorKorisnik,
                editUser,
                getKorisnici,
                getUser,
                clearUser,
            }}>
            {props.children}
        </KorisnikContext.Provider>
    );
};

export default KorisnikState;
