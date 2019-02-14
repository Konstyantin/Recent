import { combineReducers } from 'redux';

import {authentication} from './authentication.reducer';
import {auth} from './auth.reducer';
import {authProfile} from './authProfile.reducer';

/**
 * Root reducer
 *
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    authentication,
    auth,
    authProfile
});

export default rootReducer;