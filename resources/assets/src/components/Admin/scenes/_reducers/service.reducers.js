import {serviceConstants} from '../_constants'

export function service(state = {}, action) {
    switch (action.type) {
        case serviceConstants.CREATE_REQUEST:
            return console.log('create request');
        case serviceConstants.CREATE_SUCCESS:
            return console.log('create success');
        case serviceConstants.CREATE_FAILURE:
            return console.log('create failure');
        case serviceConstants.GET_REQUEST:
            return {};
        case serviceConstants.GET_SUCCESS:
            return action.list;
        case serviceConstants.GET_FAILURE:
            return console.log('get failure');
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
        default:
            return state;
    }
}