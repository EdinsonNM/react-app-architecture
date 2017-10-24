import { AUTH_ACTIONS } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN_ACTION:
            return {
                ...state,
                inProgress: true,
            };
        case AUTH_ACTIONS.AUTH_ACTION:
            return {
                ...state,
                inProgress: false,
                user: action.user
            };
        default:
            return state;
    }
};
