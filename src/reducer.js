import { combineReducers } from 'redux';
import auth from './reducers/auth';
import forms from './reducers/forms';
import carInsurance1 from './reducers/car-insurance-1';

export default combineReducers({ auth, forms, carInsurance1 });
