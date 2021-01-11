import {
    AUTHENTICATE_USER,
    CLEAR_ERRORS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    REGISTER_USER,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    DECODED_TOKEN,
    EXPIRED_TOKEN,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                authUser: false,
                // user: action.payload,
                // userID: action.payload.id,
            };
        case REGISTER_USER:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authUser: false,
                // userID: action.payload.id,
            };
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                authUser: true,
                decoded: null,
                error: action.payload,
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                authUser: action.payload,
            };
        case DECODED_TOKEN:
            return {
                ...state,
                decoded: action.payload,
            };
        // case EXPIRED_TOKEN:
        //     localStorage.removeItem('token');
        //     return {
        //         // ...state,
        //         decoded: null,
        //         authUser: true,
        //     };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
