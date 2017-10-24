import { AUTH_ACTIONS} from '../constants/actionTypes';

export const login = (username, password) => ({
    type: AUTH_ACTIONS.LOGIN_ACTION,
    data: { username, password }
});

export const auth = user => ({
    type: AUTH_ACTIONS.AUTH_ACTION,
    data: user
});

export const logout = ({
    type: AUTH_ACTIONS.LOGOUT_ACTION
});
