import { useReducer } from 'react';
import axios from 'axios';
import TablesContext from './tablesContext';
import tablesReducer from './tablesReducer';
import {
    CLEAR_TABLES,
    CREATE_NEW_TABLE,
    GET_ALL_TABLES,
    GET_EDIT_TABLE,
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

    // Clear Everything //
    const clearTables = () => dispatch({ type: CLEAR_TABLES });

    // // Clean Up After //
    // const cleanUpWorker = () => dispatch({ type: CLEANUP_WORKER });

    // // Edit Vraboten //
    // const editWorker = (worker) =>
    //     dispatch({ type: EDIT_WORKER, payload: worker });

    // // Submit Worker //
    // const updateWorker = async (vraboten) => {
    //     const config = { headers: { 'Content-Type': 'application/json' } };
    //     let { _id, ...worker } = vraboten;

    //     try {
    //         const res = await axios.put(`/api/vraboten/${_id}`, worker, config);

    //         dispatch({ type: UPDATE_VRABOTEN, payload: res.data });
    //     } catch (err) {
    //         dispatch({
    //             type: ERROR_SUBMIT_VRABOTEN,
    //             payload: err.response.data.msg,
    //         });
    //     }
    // };

    // // Delete Worker //
    // const deleteWorker = async (id) => {
    //     try {
    //         const res = await axios.delete(`/api/vraboten/${id}`);

    //         dispatch({ type: DELETE_VRABOTEN, payload: res.data });
    //     } catch (err) {
    //         dispatch({
    //             type: ERROR_SUBMIT_VRABOTEN,
    //             payload: err.response.data.msg,
    //         });
    //     }
    // };

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
            }}>
            {props.children}
        </TablesContext.Provider>
    );
};

export default TablesState;
