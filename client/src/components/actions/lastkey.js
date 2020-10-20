import axios from 'axios';
import {
    GET_LAST_USERS_KEY,
    GET_ERROR_USERS_KEY,
} from './types'
import { setAlert } from './alert';

export const getLastKey = () => async dispatch => {

    try {
        const res = await axios.get('/api/lastUserKey');

        dispatch({
            type: GET_LAST_USERS_KEY,
            payload: res.data
        });
    } catch(e) {
        dispatch({
            type: GET_ERROR_USERS_KEY,
            payload:{ msg: e.response, status: e.response.status}
        })
    }
}