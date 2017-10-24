import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { AUTH_ACTIONS } from '../constants/actionTypes';

function loginEpic(action$) {
    return action$.ofType(AUTH_ACTIONS.LOGIN_ACTION)
        .delay(2000)
        .mapTo({ type: AUTH_ACTIONS.AUTH_ACTION });
}

const rootEpic = combineEpics(loginEpic);

export default rootEpic;
