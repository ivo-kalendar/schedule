import { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    AUTHENTICATE_USER,
    REGISTER_USER,
    REGISTER_FAIL,
    CLEAR_ERRORS,
} from './types';

const AuthState = (props) => {
    const initialState = {
        authUser: true,
        error: null,
        // token: localStorage.getItem('token'),
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

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
        const config = {
            headers: { 'Content-Type': 'application/json' },
        };

        try {
            const res = await axios.post('/api/korisnik', formData, config);

            authenticateUser(false);
            console.log(res.data);
            dispatch({ type: REGISTER_USER, payload: res.data });
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data,
            });
        }
    };

    const clientErr = (err) =>
        dispatch({ type: REGISTER_FAIL, payload: [err] });

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                authUser: state.authUser,
                token: state.token,
                error: state.error,
                authenticateUser,
                register,
                clientErr,
                clearErrors,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
