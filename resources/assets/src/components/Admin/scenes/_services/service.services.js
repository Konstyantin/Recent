import {authHeader, handleResponse, getUserLocalStorage} from './../../../../_helpers'
import {serviceFormDataFormat} from './../_helpers'
export const serviceServices = {
    create,
    get,
    update,
    deleteSelected,
    show
};

/**
 * Create new service item
 *
 * @param data
 */
function create(data) {

    let formData = serviceFormDataFormat(data);

    const user = getUserLocalStorage();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer ' + user.token,
            'Accept': 'application/json',
        },
        body: formData
    };

    return fetch('/api/services', requestOptions).then(handleResponse);
}

function get() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/api/services', requestOptions).then(handleResponse);
}

function show(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/services/${id}`, requestOptions).then(handleResponse);
}

function update(id, data) {

    let formData = serviceFormDataFormat(data, 'put');
    const user = getUserLocalStorage();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer ' + user.token,
            'Accept': 'application/json',
        },
        body: formData
    };

    return fetch(`/api/services/${id}`, requestOptions).then(handleResponse);
}

function deleteSelected(selected) {

    let formData = serviceFormDataFormat({selected}, 'delete');
    const user = getUserLocalStorage();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer ' + user.token,
            'Accept': 'application/json',
        },
        body: formData
    };

    return fetch(`/api/services`, requestOptions).then(handleResponse);
}