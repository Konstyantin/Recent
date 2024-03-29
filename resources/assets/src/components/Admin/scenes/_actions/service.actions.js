import {serviceConstants} from './../_constants';
import {serviceServices} from './../_services';
import {history} from "../../../../_helpers";
import {alertActions} from "../../../../_actions";

export const serviceActions = {
    getList,
    create,
    show,
    update,
    deleteSelected
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
    return dispatch => {
        dispatch(request(id));

        serviceServices.show(id)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    console.log(error);
                }
            )
    };

    function request(id) {return {type: serviceConstants.SHOW_REQUEST, id}}
    function success(data) {return {type: serviceConstants.SHOW_SUCCESS, data}}
    function failure(error) {return {type: serviceConstants.SHOW_SUCCESS, error}}
}

function update(id, data) {
    return dispatch => {
        dispatch(request());

        serviceServices.update(id, data)
            .then(
                service => {
                    dispatch(success(service));
                    history.push('/admin/services');
                    dispatch(alertActions.success('Service item was updated success'));
                },
                error => {
                    dispatch(error);
                }
            )
    };

    function request() {return {type: serviceConstants.UPDATE_REQUEST}}
    function success(data) {return {type: serviceConstants.UPDATE_SUCCESS, data}}
    function failure(error) {return {type: serviceConstants.UPDATE_FAILURE, error}}
}

function deleteSelected(selected) {

    return dispatch => {
        dispatch(request());

        serviceServices.deleteSelected(selected)
            .then(
                service => {
                    dispatch(success());
                    dispatch(alertActions.success('Service services was delete success'));
                },
                error => {
                    dispatch(error);
                }
            )
    };


    function request() {return {type: serviceConstants.DELETE_REQUEST}}
    function success() {return {type: serviceConstants.DELETE_SUCCESS}}
    function failure(error) {return {type: serviceConstants.DELETE_REQUEST}}
}