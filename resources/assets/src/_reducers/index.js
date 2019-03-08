import { combineReducers } from 'redux';

import {authentication} from './authentication.reducer';
import {alert} from './alert.reducer';
import {authProfile} from './authProfile.reducer';

/**
 * Root reducer
 *
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    authentication,
    alert,
    authProfile
});

export default rootReducer;