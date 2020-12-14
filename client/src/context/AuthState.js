import { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { AUTHENTICATE_USER, REGISTER_USER, REGISTER_FAIL } from './types';

const AuthState = (props) => {
    const initialState = {
        authUser: true,
        error: null,
        token: localStorage.getItem('token'),
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
            dispatch({ type: REGISTER_USER, payload: res.data });
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data,
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                authUser: state.authUser,
                token: state.token,
                error: state.error,
                authenticateUser,
                register,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
