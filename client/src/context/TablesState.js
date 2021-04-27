import { useReducer } from 'react';
import axios from 'axios';
import TablesContext from './tablesContext';
import tablesReducer from './tablesReducer';
import {
    BACK_FROM_DELETE_SCREEN,
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    DELETE_TABLE,
    GET_ALL_TABLES,
    GET_EDIT_TABLE,
    GO_TO_DELETE_SCREEN,
    SELECTED_TABLE,
    TABLE_ERROR,
} from './types';

const TablesState = (props) => {
    const initialState = {
        selectedTable: null,
        tablesData: null,
        editTable: null,
        allTables: null,
        tableError: null,
        tableOperation: null,
    };

    const [state, dispatch] = useReducer(tablesReducer, initialState);

    // Get All Tables //
    const getAllTables = async () => {
        try {
            const res = await axios.get('/api/tables');

            dispatch({ type: GET_ALL_TABLES, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data?.msg,
            });
        }
    };

    // Set Selected Table and fetch data //
    const getSelectedTable = async (tableID) => {
        try {
            const res = await axios.get(`/api/table/${tableID}`);

            dispatch({ type: SELECTED_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data.msg || err,
            });
        }
    };

    // Get selected to edit screen //
    const getEditTable = async (tableID) => {
        try {
            const res = await axios.get(`/api/edittable/${tableID}`);

            dispatch({ type: GET_EDIT_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data.msg || err,
            });
        }
    };

    // Delete Decision Screen //
    const goToDeleteScreen = () => dispatch({ type: GO_TO_DELETE_SCREEN });
    const backFromDelete = () => dispatch({ type: BACK_FROM_DELETE_SCREEN });

    // Clear Everything //
    const clearTables = () => dispatch({ type: CLEAR_TABLES });

    // Delete table //
    const deleteTable = async (tableID) => {
        try {
            const res = await axios.delete(`/api/deletetable/${tableID}`);

            dispatch({ type: DELETE_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data.msg || err,
            });
        }
    };

    // Create New Table with all active distributors //
    const createNewTable = async (author) => {
        const config = { headers: { 'Content-Type': 'application/json' } };
        const table = { author };

        try {
            const res = await axios.post('/api/table/new', table, config);

            dispatch({ type: CREATE_NEW_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response.data.msg,
            });
        }
    };

    // Copy and Create New Table with all active distributors //
    const copyToNewTable = async (author, tableID) => {
        const config = { headers: { 'Content-Type': 'application/json' } };

        try {
            const res = await axios.post(
                '/api/copytable/new',
                { author, tableID },
                config
            );

            dispatch({ type: CREATE_NEW_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response.data.msg,
            });
        }
    };

    return (
        <TablesContext.Provider
            value={{
                editTable: state.editTable,
                allTables: state.allTables,
                selectedTable: state.selectedTable,
                tableError: state.tableError,
                tableOperation: state.tableOperation,
                tablesData: state.tablesData,
                getSelectedTable,
                createNewTable,
                getAllTables,
                getEditTable,
                clearTables,
                goToDeleteScreen,
                backFromDelete,
                deleteTable,
                copyToNewTable,
            }}>
            {props.children}
        </TablesContext.Provider>
    );
};

export default TablesState;
