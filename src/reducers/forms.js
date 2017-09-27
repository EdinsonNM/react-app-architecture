import {
    FORM_UPDATE_INPUT_ACTION
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FORM_UPDATE_INPUT_ACTION:
            return {
                ...state,
                [action.data.id]: action.data.value
            }
        default:
            return state;
    }

    return state;
};
