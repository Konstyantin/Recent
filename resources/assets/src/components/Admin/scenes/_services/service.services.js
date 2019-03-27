import {authHeader, handleResponse} from './../../../../_helpers'
export const serviceServices = {
    create,
    get,
    update,
    remove
};

function create(data) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    let requestResponse = fetch('/api/services', requestOptions);

    console.log(data);
    console.log(requestResponse);
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