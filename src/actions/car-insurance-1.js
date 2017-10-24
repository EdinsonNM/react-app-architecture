import { CAR_INSURANCE } from '../constants/actionTypes';

export const changeInput = e => ({
    type: CAR_INSURANCE.UPDATE_INPUT_ACTION,
    data: e.target
});

export const setStep = step => ({
    type: CAR_INSURANCE.SETSTEP,
    payload: step
});
