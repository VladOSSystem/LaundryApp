import {
    GET_PROFILE,
    GET_USER_LAUNDRY,
    USER_ERRORS,
    UPDATE_PROFILE
} from '../actions/types';

import axios from 'axios';
import { setAlert } from './alert';

export const getLaundry = () => async dispatch => {

    try {
        const res = await axios.get('/api/profile/myLaundry');
        
        dispatch({
            type: GET_USER_LAUNDRY,
            payload: res.data
        });

    } catch (e) {
        dispatch({
            type: USER_ERRORS,
            payload: {msg: e.response, status: e.response.status}
        })
    }
}