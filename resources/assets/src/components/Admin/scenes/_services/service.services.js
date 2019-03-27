import {authHeader, handleResponse} from './../../../../_helpers'
export const serviceServices = {
    create,
    get,
    update,
    remove
};

function create(data) {

    let formData = new FormData();

    const user = JSON.parse(localStorage.getItem('user'));

    const headerOption = {
        'Authorization' : 'Bearer ' + user.token
    };

    const {title, short_description, description, icon, image} = data;

    formData.append('title', title);
    formData.append('short_description', short_description);
    formData.append('description', description);
    formData.append('icon', icon[0]);
    formData.append('image', image[0]);

    const requestOptions = {
        method: 'POST',
        headers: headerOption,
        body: formData
    };

    let requestResponse = fetch('/api/services', requestOptions);
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