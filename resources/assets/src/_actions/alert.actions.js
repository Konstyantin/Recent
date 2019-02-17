import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

/**
 * @param message
 * @returns {{type: string, message: *}}
 */
function success(message) {
    return {type: alertConstants.SUCCESS, message}
}

/**
 * @param message
 * @returns {{type: string, message: *}}
 */
function error(message) {
    return {type: alertConstants.ERROR, message}
}

/**
 * @returns {{type: string}}
 */
function clear() {
    return {type: alertConstants.CLEAR}
}