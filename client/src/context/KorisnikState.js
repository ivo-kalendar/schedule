import { useReducer } from 'react';
import axios from 'axios';
import KorisnikContext from './korisnikContext';
import korisnikReducer from './korisnikReducer';
import { GET_KORISNICI, GET_USER, GET_ROUTES } from './types';

const KorisnikState = (props) => {
    const initialState = {
        korisnici: null,
        userID: '',
        routes: [],
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
            // const res = await axios.get('/api/allusers');
            const res = await axios.get('/api/clientroutes');

            dispatch({ type: GET_KORISNICI, payload: res.data });
        } catch (error) {
            console.log(error, 'од овде е еророт...02');
        }
    };

    const getRoutes = async () => {
        try {
            const res = await axios.get('/api/clientroutes');

            dispatch({ type: GET_ROUTES, payload: res.data });
        } catch (error) {
            console.log(error, 'од овде е еророт...02');
        }
    };

    return (
        <KorisnikContext.Provider
            value={{
                userID: state.userID,
                korisnici: state.korisnici,
                routes: state.routes,
                getRoutes,
                getKorisnici,
                getUser,
            }}>
            {props.children}
        </KorisnikContext.Provider>
    );
};

export default KorisnikState;
