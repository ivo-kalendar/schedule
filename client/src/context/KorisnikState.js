import { useReducer } from 'react';
import axios from 'axios';
import KorisnikContext from './korisnikContext';
import korisnikReducer from './korisnikReducer';
import { GET_KORISNICI, GET_USER } from './types';

const KorisnikState = (props) => {
    const initialState = {
        korisnici: null,
        userID: '',
    };

    const [state, dispatch] = useReducer(korisnikReducer, initialState);

    // Get User //
    const getUser = async (id) => {
        try {
            const res = await axios.get(`/api/user/${id}`);

            dispatch({ type: GET_USER, payload: res.data });
        } catch (error) {
            console.log(error);
        }
    };

    // Get Korisnici //
    const getKorisnici = async () => {
        try {
            const res = await axios.get('/api/korisnik');

            dispatch({ type: GET_KORISNICI, payload: res.data });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <KorisnikContext.Provider
            value={{
                userID: state.userID,
                korisnici: state.korisnici,
                getKorisnici,
                getUser,
            }}>
            {props.children}
        </KorisnikContext.Provider>
    );
};

export default KorisnikState;
