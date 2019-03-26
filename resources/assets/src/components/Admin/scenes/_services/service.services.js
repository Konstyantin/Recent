import {authHeader, handleResponse} from './../../../../_helpers'
export const serviceServices = {
    create,
    get,
    update,
    remove
};

function create(data) {
    console.log(data);
    console.log('create service service');
}

function get() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/api/services', requestOptions).then(handleResponse);
}

function update() {
    console.log('update service service')
}

function remove() {
    console.log('remove service service')
}