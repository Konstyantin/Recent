import { userConstants } from '../_constants';

export function auth(state = {}, action) {
    switch (action.type) {
        case userConstants.AUTH_REQUEST:
            return {
                loading: true
            };
        case userConstants.AUTH_SUCCESS:
            return action.user;
        case userConstants.AUTH_FAILURE:
            return {};
        default:
            return state;
    }
}