import {userConstants} from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST || userConstants.REGISTER_REQUEST :
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS || userConstants.REGISTER_SUCCESS :
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE || userConstants.REGISTER_FAILURE :
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}