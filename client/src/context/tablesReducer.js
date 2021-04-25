import {
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    GET_ALL_TABLES,
    GET_EDIT_TABLE,
    SELECTED_TABLE,
    TABLE_ERROR,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_EDIT_TABLE:
        case CREATE_NEW_TABLE:
            return {
                ...state,
                editTable: action.payload,
                tableError: null,
            };
        case GET_ALL_TABLES:
            return {
                ...state,
                allTables: action.payload,
            };
        case SELECTED_TABLE:
            return {
                ...state,
                selectedTable: action.payload,
            };
        case TABLE_ERROR:
            return {
                ...state,
                tableError: action.payload,
            };
        case CLEAR_TABLES:
            return {
                ...state,
                editTable: null,
                tableError: null,
                tableOperation: null,
            };
        default:
            return state;
    }
};
