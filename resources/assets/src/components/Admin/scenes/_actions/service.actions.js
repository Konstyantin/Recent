import {serviceConstants} from './../_constants';
import {serviceServices} from './../_services';
import {history} from "../../../../_helpers";
import {alertActions} from "../../../../_actions";

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

    return dispatch => {
        dispatch(request(data));

        serviceServices.create(data)
            .then(
                service => {
                    dispatch(success(service));
                    history.push('/admin/services');
                    dispatch(alertActions.success('Service item was created success'));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    };

    function request(data) {return {type: serviceConstants.CREATE_REQUEST, data}}
    function success(data) {return {type: serviceConstants.CREATE_SUCCESS, data}}
    function failure(error) {return {type: serviceConstants.CREATE_FAILURE, error}}
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