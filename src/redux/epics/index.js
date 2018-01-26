import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { LOGIN_ACTION, AUTH_ACTION } from '../constants/actionTypes';

function loginEpic(action$) {
    return action$.ofType(LOGIN_ACTION)
        .delay(2000)
        .mapTo({ type: AUTH_ACTION });
}

export const rootEpic = combineEpics(loginEpic);

