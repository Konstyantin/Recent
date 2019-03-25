import { combineReducers } from 'redux';

import {authentication} from './authentication.reducer';
import {alert} from './alert.reducer';
import {authProfile} from './authProfile.reducer';
import {service} from './../components/Admin/scenes/_reducers';

/**
 * Root reducer
 *
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    authentication,
    alert,
    authProfile,
    service
});

export default rootReducer;