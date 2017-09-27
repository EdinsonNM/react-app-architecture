import { FORM_UPDATE_INPUT_ACTION } from '../constants/actionTypes';
export const changeInput = (e) => ({
    type: FORM_UPDATE_INPUT_ACTION,
    data: e.target
});
