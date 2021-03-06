import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from '../actions/types'
import setAuthToken from '../utils/setAuthToken'
import { setAlert } from './alert'
// Load User

export const loadUser = () => async dispatch => {
    
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('http://localhost:5000/api/profile/me')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};
// Register User 
export const register = ({name, surname, email, password, password2}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({name, surname, email, password, password2});
    console.log(body)
    try {

        const res = await axios.post('/api/auth/register', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        
        dispatch(loadUser())
    } catch(err) {
        const errors = err.response.data;
  
        dispatch({
            type: REGISTER_FAIL,
            payload: errors
        })
    }
};

// Login User
export const  login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
          }
    };

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', body, config)
        console.log(body)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
  
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;
        console.log(errors)
        if (errors) {
             dispatch(setAlert(errors, 'danger'))
        }

        dispatch({
            type:LOGIN_FAIL,
            payload:errors
        });
    }
}

// Logout
export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}