import {
    CLEANUP_WORKER,
    CREATE_WORKER,
    DELETE_VRABOTEN,
    EDIT_WORKER,
    ERROR_SUBMIT_VRABOTEN,
    GET_VRABOTENI,
    UPDATE_VRABOTEN,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_VRABOTENI:
            return {
                ...state,
                vraboteni: action.payload,
                errorUpdateVraboten: null,
                vrabotenOperation: null,
                errorVraboten: null,
                editVraboten: null,
            };
        case EDIT_WORKER:
            return {
                ...state,
                editVraboten: action.payload,
            };
        case CREATE_WORKER:
            return {
                ...state,
                editVraboten: action.payload,
            };
        case CLEANUP_WORKER:
            return {
                ...state,
                errorVraboten: null,
                editVraboten: null,
                vrabotenOperation: null,
                errorUpdateVraboten: null,
            };
        case UPDATE_VRABOTEN:
            return {
                ...state,
                vrabotenOperation: 'внесен',
            };
        case DELETE_VRABOTEN:
            return {
                ...state,
                vrabotenOperation: 'избришан',
            };
        case ERROR_SUBMIT_VRABOTEN:
            return {
                ...state,
                vrabotenOperation: null,
                errorUpdateVraboten: action.payload,
            };
        default:
            return state;
    }
};
