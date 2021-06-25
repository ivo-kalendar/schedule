import {
    ADD_DRIVERS,
    BACK_FROM_DELETE_SCREEN,
    CHECK_ACTIVE_DRIVERS,
    CLEAR_EDIT_TABLE,
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    DELETE_TABLE,
    GET_ALL_TABLES,
    GET_COMMENT_OPTIONS,
    GET_EDIT_TABLE,
    GET_HOUR_OPTIONS,
    GET_KOMERCIAL_OPTIONS,
    GO_TO_DELETE_SCREEN,
    POST_TABLE_COMMENT,
    PUT_DISTRIBUTOR_VALUES,
    REMOVE_DRIVERS,
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
        case GET_HOUR_OPTIONS:
            return {
                ...state,
                hour: action.payload,
            };
        case GET_COMMENT_OPTIONS:
            return {
                ...state,
                komentar: action.payload,
            };
        case GET_KOMERCIAL_OPTIONS:
            return {
                ...state,
                komercija: action.payload,
            };
        case SELECTED_TABLE:
            return {
                ...state,
                selectedTable: action.payload,
            };
        case POST_TABLE_COMMENT:
            return {
                ...state,
                selectedTable: action.payload,
                editTable: action.payload,
            };
        case TABLE_ERROR:
            return {
                ...state,
                activeDistributors: [],
                inActiveDistributors: [],
                tableError: action.payload,
            };
        case REMOVE_DRIVERS:
        case ADD_DRIVERS:
            return {
                ...state,
                activeDistributors: [],
                inActiveDistributors: [],
            };
        case CHECK_ACTIVE_DRIVERS:
            return {
                ...state,
                activeDistributors: action.payload.active,
                inActiveDistributors: action.payload.inactive,
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
                hour: [],
                komentar: [],
                komercija: [],
                activeDistributors: [],
                inActiveDistributors: [],
            };
        case CLEAR_TABLES:
            return {
                ...state,
                hour: [],
                komentar: [],
                komercija: [],
                activeDistributors: [],
                inActiveDistributors: [],
                selectedTable: null,
                editTable: null,
                allTables: null,
                tableError: null,
                tableOperation: null,
            };
        default:
            return state;
    }
};
