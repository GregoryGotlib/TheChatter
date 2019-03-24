import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers ({
    auth_R: authReducer,
    errors_R: errorReducer,

});