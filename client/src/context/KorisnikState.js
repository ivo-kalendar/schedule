import { useReducer } from 'react';
import axios from 'axios';
import KorisnikContext from './korisnikContext';
import korisnikReducer from './korisnikReducer';
import { GET_KORISNICI } from './types';

const KorisnikState = (props) => {
    const initialState = {
        korisnici: null,
    };

    const [state, dispatch] = useReducer(korisnikReducer, initialState);

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
            value={{ korisnici: state.korisnici, getKorisnici }}>
            {props.children}
        </KorisnikContext.Provider>
    );
};

export default KorisnikState;
