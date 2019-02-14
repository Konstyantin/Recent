import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './';
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
 * @param name
 * @param email
 * @param password
 * @param passwordConfirmation
 * @returns {Function}
 */
function register(name, email, password, passwordConfirmation) {
    return dispatch => {
        dispatch(request({name}));

        userService.register(name, email, password, passwordConfirmation)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
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
                    dispatch(alertActions.success('Profile updated successful'))
                },
                error => dispatch(failure(error))
            );
    };

    function request() {return {type: userConstants.AUTH_REQUEST}}
    function success(user) {return {type: userConstants.AUTH_SUCCESS, user}}
    function failure(error) {return {type: userConstants.AUTH_FAILURE, error}}
}