import { combineReducers } from 'redux'
import auth from './auth'
import alert from './alert';
import profile from './profile';
import lastkey from './lastkey';
export default combineReducers({
    auth,
    alert,
    profile,
    lastkey
})