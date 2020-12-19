import {
    AUTHENTICATE_USER,
    CLEAR_ERRORS,
    REGISTER_FAIL,
    REGISTER_USER,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case REGISTER_USER:
            // localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
            };
        case REGISTER_FAIL:
            // localStorage.removeItem('token');
            return {
                ...state,
                error: action.payload,
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                authUser: action.payload,
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
