import {serviceConstants} from './../_constants';
import {serviceServices} from './../_services';

export const serviceActions = {
    getList,
    create,
    show,
    update,
    remove
};

function getList() {
    return dispatch => {
        serviceServices.get();
        dispatch(request());
    };

    function request() {return {type: serviceConstants.GET_REQUEST}};
    function success() {return {type: serviceConstants.GET_SUCCESS}};
    function failure() {return {type: serviceConstants.GET_FAILURE}};
}

function create(data) {
    console.log('create a new service item')
}

function show(id) {
    console.log('show a service item data')
}

function update(id, data) {
    console.log('updated a service item')
}

function remove(id) {
    console.log('delete a service item');
}