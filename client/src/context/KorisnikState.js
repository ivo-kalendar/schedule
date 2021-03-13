import { useReducer } from 'react';
import axios from 'axios';
import KorisnikContext from './korisnikContext';
import korisnikReducer from './korisnikReducer';
import { CLEAR_USER, GET_KORISNICI, GET_USER } from './types';

const KorisnikState = (props) => {
    const initialState = {
        korisnici: null,
        user: '',
    };

    const [state, dispatch] = useReducer(korisnikReducer, initialState);

    // Get User //
    const getUser = async (id) => {
        try {
            const res = await axios.get(`/api/user/${id}`);

            dispatch({ type: GET_USER, payload: res.data });
        } catch (error) {
            console.log(error, 'од овде е еророт...01');
        }
    };

    // Get Korisnici //
    const getKorisnici = async () => {
        try {
            const res = await axios.get('/api/allusers');

            dispatch({ type: GET_KORISNICI, payload: res.data });
        } catch (error) {
            console.log(error, 'од овде е еророт...02');
        }
    };

    // Logout //
    const clearUser = () => dispatch({ type: CLEAR_USER });

    return (
        <KorisnikContext.Provider
            value={{
                user: state.user,
                korisnici: state.korisnici,
                getKorisnici,
                getUser,
                clearUser,
            }}>
            {props.children}
        </KorisnikContext.Provider>
    );
};

export default KorisnikState;
