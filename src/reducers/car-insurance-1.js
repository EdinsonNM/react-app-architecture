import { CAR_INSURANCE } from '../constants/actionTypes';

export default (state = { step: { title: '', step: 0, summary: '' } }, action) => {
    switch (action.type) {
        case CAR_INSURANCE.SETSTEP:
            return {
                ...state,
                step: action.payload,
            };
        default:
            return state;
    }
};
