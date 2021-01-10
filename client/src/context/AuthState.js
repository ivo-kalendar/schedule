import { useReducer, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../utils/setAuthToken';
import {
    AUTHENTICATE_USER,
    REGISTER_USER,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    LOGOUT,
    USER_LOADED,
    LOGIN_SUCCESS,
    DECODED_TOKEN,
    // EXPIRED_TOKEN,
} from './types';

const AuthState = (props) => {
    const initialState = {
        authUser: true,
        error: null,
        token: localStorage.getItem('token'),
        decoded: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const decodedToken = () => {
        if (localStorage.token) {
            let decodedPayload = jwt_decode(localStorage.token);
            dispatch({ type: DECODED_TOKEN, payload: decodedPayload });
        }
    };

    // load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            decodedToken();
        }

        try {
            const res = await axios.get('/api/korisnik');

            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            console.log(err);
        }
    };

    // Authenticate User //
    const authenticateUser = (bol) => {
        try {
            dispatch({ type: AUTHENTICATE_USER, payload: bol });
        } catch (error) {
            console.log(error);
        }
    };

    // Register User //
    const register = async (formData) => {
        const config = { headers: { 'Content-Type': 'application/json' } };

        try {
            const res = await axios.post('/api/korisnik', formData, config);

            loadUser();
            dispatch({ type: REGISTER_USER, payload: res.data });
        } catch (err) {
            dispatch({ type: REGISTER_FAIL, payload: err.response.data });
        }
    };

    // Login User
    const login = async (formData) => {
        const config = { headers: { 'Content-Type': 'application/json' } };

        try {
            const res = await axios.post('/api/login', formData, config);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            loadUser();
        } catch (err) {
            console.log(err);
        }
    };

    // Check for client Errors on registration before send to server
    const clientErr = (err) => dispatch({ type: REGISTER_FAIL, payload: err });

    // Logout
    const logout = () => dispatch({ type: LOGOUT });

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    useEffect(() => {
        if (localStorage.token) {
            loadUser();
        }
        // eslint-disable-next-line
    }, []);
    // const checkExpiredToken = () => {
    //     console.log(state.decode);
    //     console.log(new Date().getTime());
    //     state.decoded
    //         ? console.log(state.decoded.exp * 1000)
    //         : console.log('nothing yet');

    //     const presentTime = new Date().getTime();

    //     if (state.decoded && state.decoded.exp * 1000 < presentTime) {
    //         // dispatch({ type: EXPIRED_TOKEN });
    //         console.log('biger the time');
    //     }
    // };

    return (
        <AuthContext.Provider
            value={{
                decoded: state.decoded,
                authUser: state.authUser,
                token: state.token,
                error: state.error,
                // checkExpiredToken,
                authenticateUser,
                loadUser,
                register,
                login,
                logout,
                clientErr,
                clearErrors,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
