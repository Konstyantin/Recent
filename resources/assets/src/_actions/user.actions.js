import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './alert.actions';
import {history} from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAuth,
    profileUpdate
};

/**
 * Login function
 *
 * @param email
 * @param password
 * @returns {Function}
 */
function login(email, password) {
    return dispatch => {
        dispatch(request({email}));
        dispatch(alertActions.clear());

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {return{type: userConstants.LOGIN_REQUEST, user}}
    function success(user) {return{type: userConstants.LOGIN_SUCCESS, user}}
    function failure(error) {return{type: userConstants.LOGIN_FAILURE, error}}
}

/**
 * Logout function
 *
 * @returns {{type: string}}
 */
function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

/**
 * Register function
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param phone
 * @param password
 * @param passwordConfirmation
 */
function register(firstName, lastName, email, phone, password, passwordConfirmation) {
    return dispatch => {
        dispatch(request({name}));
        dispatch(alertActions.clear());

        userService.register(firstName, lastName, email, phone, password, passwordConfirmation)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/register');
                    dispatch(alertActions.success('User was registered successful'));

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(user) {return {type: userConstants.REGISTER_REQUEST, user}}
    function success(user) {return {type: userConstants.REGISTER_SUCCESS, user}}
    function failure(error) {return {type: userConstants.REGISTER_FAILURE, error}}
}

/**
 * Get auth action
 *
 * @returns {Function}
 */
function getAuth() {
    return dispatch => {
        dispatch(request());

        userService.getAuth()
            .then(
                user => dispatch(success(user.user)),
                error => dispatch(failure(error))
            )
    };

    function request() {return {type: userConstants.AUTH_REQUEST}}
    function success(user) {return {type: userConstants.AUTH_SUCCESS, user}}
    function failure(error) {return {type: userConstants.AUTH_FAILURE, error}}
}

/**
 * Profile update
 *
 * @param id
 * @param name
 * @param email
 * @returns {Function}
 */
function profileUpdate(id, name, email) {
    return dispatch => {
        dispatch(request());

        userService.updateProfile(id, name, email)
            .then(
                user => {
                    dispatch(success(user.user));
                },
                error => dispatch(failure(error))
            );
    };

    function request() {return {type: userConstants.AUTH_REQUEST}}
    function success(user) {return {type: userConstants.AUTH_SUCCESS, user}}
    function failure(error) {return {type: userConstants.AUTH_FAILURE, error}}
}