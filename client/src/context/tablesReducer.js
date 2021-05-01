import {
    BACK_FROM_DELETE_SCREEN,
    CLEAR_EDIT_TABLE,
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    DELETE_TABLE,
    GET_ALL_TABLES,
    GET_EDIT_TABLE,
    GO_TO_DELETE_SCREEN,
    PUT_DISTRIBUTOR_VALUES,
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
                selectedTable: null,
                editTable: null,
                allTables: null,
                tableError: null,
                tableOperation: null,
            };
        case PUT_DISTRIBUTOR_VALUES:
            return {
                ...state,
                editTable: action.payload,
                selectedTable: action.payload,
            };
        case GO_TO_DELETE_SCREEN:
            return {
                ...state,
                tableOperation: 'delete',
            };
        case BACK_FROM_DELETE_SCREEN:
            return {
                ...state,
                tableOperation: null,
            };
        case DELETE_TABLE:
            return {
                ...state,
                tableOperation: 'table deleted',
                editTable: null,
                tableError: null,
            };
        case CLEAR_EDIT_TABLE:
            return {
                ...state,
                editTable: null,
            };
        default:
            return state;
    }
};
