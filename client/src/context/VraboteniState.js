import { useReducer } from 'react';
import axios from 'axios';
import VraboteniContext from './vraboteniContext';
import vraboteniReducer from './vraboteniReducer';
import { GET_VRABOTENI } from './types';

const VraboteniState = (props) => {
    const initialState = {
        vraboteni: null,
    };

    const [state, dispatch] = useReducer(vraboteniReducer, initialState);

    // Get Vraboteni //
    const getVraboteni = async () => {
        try {
            const res = await axios.get('/api');

            dispatch({ type: GET_VRABOTENI, payload: res.data });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <VraboteniContext.Provider
            value={{ vraboteni: state.vraboteni, getVraboteni }}>
            {props.children}
        </VraboteniContext.Provider>
    );
};

export default VraboteniState;
