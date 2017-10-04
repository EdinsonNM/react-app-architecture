import { combineReducers } from 'redux';
import auth from './reducers/auth';
import forms from './reducers/forms';

export default combineReducers({ auth, forms });
