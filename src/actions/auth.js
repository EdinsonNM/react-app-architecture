import { LOGIN_ACTION, AUTH_ACTION, LOGOUT_ACTION } from '../constants/actionTypes';

export const login = (username, password) => ({
    type: LOGIN_ACTION,
    data: { username, password }
});

export const auth = user => ({
    type: AUTH_ACTION,
    data: user
});

export const logout = ({
    type: LOGOUT_ACTION
});
