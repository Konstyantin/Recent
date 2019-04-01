import {serviceConstants} from '../_constants'

export function service(state = {}, action) {

    switch (action.type) {
        case serviceConstants.CREATE_REQUEST:
            return {};
        case serviceConstants.CREATE_SUCCESS:
            return {};
        case serviceConstants.CREATE_FAILURE:
            return {
                message: action.error.message,
                errors: action.error.errors
            };
        case serviceConstants.GET_REQUEST:
            return {requested: true};
        case serviceConstants.GET_SUCCESS:
            return {
                list: action.list,
                requested: false
            };
        case serviceConstants.GET_FAILURE:
            return {};
        case serviceConstants.UPDATE_REQUEST:
            return console.log('updated request');
        case serviceConstants.UPDATE_SUCCESS:
            return console.log('updated success');
        case serviceConstants.UPDATE_FAILURE:
            return console.log('updated failure');
        case serviceConstants.REMOVE_REQUEST:
            return console.log('remove request');
        case serviceConstants.REMOVE_SUCCESS:
            return console.log('remove success');
        case serviceConstants.REMOVE_FAILURE:
            return console.log('remove failure');
        case serviceConstants.SHOW_REQUEST:
            return {
                requested: true
            };
        case serviceConstants.SHOW_SUCCESS:
            return {
                data: action.data.shift(),
                requested: false
            };
        case serviceConstants.SHOW_FAILURE:
            return {};
        default:
            return state;
    }
}