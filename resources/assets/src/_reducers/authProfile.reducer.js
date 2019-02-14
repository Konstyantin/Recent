import { userConstants } from '../_constants';

export function authProfile(state = {}, action) {
    switch (action.type) {
        case userConstants.PROFILE_REQUEST:
            return {
                loading: true
            };
        case userConstants.PROFILE_SUCCESS:
            return action.user;
        case userConstants.PROFILE_FAILURE:
            return {};
        default:
            return state;
    }
}