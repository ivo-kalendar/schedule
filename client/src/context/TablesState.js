import { useReducer } from 'react';
import axios from 'axios';
import TablesContext from './tablesContext';
import tablesReducer from './tablesReducer';
import {
    BACK_FROM_DELETE_SCREEN,
    CLEAR_EDIT_TABLE,
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    DELETE_TABLE,
    GET_ALL_TABLES,
    GET_EDIT_TABLE,
    GET_HOUR_OPTIONS,
    GO_TO_DELETE_SCREEN,
    PUT_DISTRIBUTOR_VALUES,
    SELECTED_TABLE,
    TABLE_ERROR,
} from './types';

const TablesState = (props) => {
    const initialState = {
        hour: [],
        selectedTable: null,
        editTable: null,
        allTables: null,
        tableError: null,
        tableOperation: null,
    };

    const [state, dispatch] = useReducer(tablesReducer, initialState);

    // Get All Hour Options //
    const getHourOptions = async () => {
        try {
            const res = await axios.get('/api/options/hour');

            dispatch({ type: GET_HOUR_OPTIONS, payload: res.data.hour });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data?.msg || err,
            });
        }
    };

    // Get All Tables Data //
    const getAllTablesData = async () => {
        try {
            const res = await axios.get('/api/tables/users');

            dispatch({ type: GET_ALL_TABLES, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data?.msg || err,
            });
        }
    };

    // Get All Tables //
    const getAllTables = async () => {
        try {
            const res = await axios.get('/api/tables');
            getAllTablesData();

            dispatch({ type: GET_ALL_TABLES, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data?.msg || err,
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
            const res = await axios.get(`/api/table/${tableID}`);

            dispatch({ type: GET_EDIT_TABLE, payload: res.data });
        } catch (err) {
            dispatch({
                type: TABLE_ERROR,
                payload: err.response?.data.msg || err,
            });
        }
    };

    // Delete and Clear Decisions Screen //
    const goToDeleteScreen = () => dispatch({ type: GO_TO_DELETE_SCREEN });
    const backFromDelete = () => dispatch({ type: BACK_FROM_DELETE_SCREEN });
    const clearEditTable = () => dispatch({ type: CLEAR_EDIT_TABLE });

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

    // Update Table with distributor values //
    const updateTable = async (tableID, distributorID, field, value) => {
        const config = { headers: { 'Content-Type': 'application/json' } };
        const table = { distributorID, field, value };

        try {
            const res = await axios.put(
                `/api/updatetable/${tableID}`,
                table,
                config
            );
            const getRes = await axios.get(`/api/table/${res.data}`);

            dispatch({ type: PUT_DISTRIBUTOR_VALUES, payload: getRes.data });
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
            const getRes = await axios.get(`/api/table/${res.data._id}`);

            dispatch({ type: CREATE_NEW_TABLE, payload: getRes.data });
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
            const getRes = await axios.get(`/api/table/${res.data._id}`);

            dispatch({ type: CREATE_NEW_TABLE, payload: getRes.data });
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
                hour: state.hour,
                editTable: state.editTable,
                allTables: state.allTables,
                selectedTable: state.selectedTable,
                tableError: state.tableError,
                tableOperation: state.tableOperation,
                getHourOptions,
                getSelectedTable,
                createNewTable,
                getAllTables,
                getEditTable,
                clearTables,
                goToDeleteScreen,
                backFromDelete,
                deleteTable,
                copyToNewTable,
                clearEditTable,
                updateTable,
            }}>
            {props.children}
        </TablesContext.Provider>
    );
};

export default TablesState;
