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

        dispatch(request());

        serviceServices.get()
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            )
    };

    function request() {return {type: serviceConstants.GET_REQUEST}}
    function success(list) {return {type: serviceConstants.GET_SUCCESS, list}}
    function failure(error) {return {type: serviceConstants.GET_FAILURE, error}}
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