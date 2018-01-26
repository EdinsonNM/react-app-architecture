import {
    LOGIN_ACTION,
    AUTH_ACTION
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                inProgress: true,
            };
        case AUTH_ACTION:
            return {
                ...state,
                inProgress: false,
                user: action.user
            };
        default:
            return state;
    }
};
