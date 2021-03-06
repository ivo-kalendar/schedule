import {
    CLEAR_ERRORS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    REGISTER_USER,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    DECODED_TOKEN,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                user: state.decoded ? state.decoded.id : false,
            };
        case REGISTER_USER:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                user: state.decoded ? state.decoded.id : false,
            };
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: false,
                decoded: null,
                error: action.payload ? action.payload : null,
            };
        case DECODED_TOKEN:
            return {
                ...state,
                decoded: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
