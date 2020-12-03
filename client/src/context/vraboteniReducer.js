import { GET_VRABOTENI } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_VRABOTENI:
            return {
                ...state,
                vraboteni: action.payload,
            };
        default:
            return state;
    }
};
