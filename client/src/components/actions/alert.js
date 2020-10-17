import { uuid } from 'uuidv4';

import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 1000) => dispatch => {
    const id = uuid();
    setTimeout(() => {
        dispatch({
            type: SET_ALERT, 
            payload: {msg, alertType, id}
        });
        
    }, 500);

    setTimeout(() => {
        dispatch({type: REMOVE_ALERT, payload: id })
    }, timeout + 1000);
}   
 