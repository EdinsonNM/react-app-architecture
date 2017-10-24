import { FORM_ACTIONS } from '../constants/actionTypes';

export const changeInput = e => ({
    type: FORM_ACTIONS.UPDATE_INPUT_ACTION,
    data: e.target
});

export const changeSelect = e => ({
    type: FORM_ACTIONS.UPDATE_INPUT_ACTION,
    data: e.target
});
