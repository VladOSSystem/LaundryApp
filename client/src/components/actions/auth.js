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

    try {

        const res = await axios.post('http://localhost:5000/api/auth/register', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser())
    } catch(err) {
        const errors = err.response.data;

        // if (errors) {
        //     errors.forEach(element => {
        //         dispatch(setAlert(error.msg, 'danger'))
        //     });
        // }
        dispatch({
            type: REGISTER_FAIL
        })
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
          }
    };

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', body, config)
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data

        dispatch({
            type:LOGIN_FAIL
        });
    }
}

// Logout
export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}