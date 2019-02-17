import {authHeader} from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAuth,
    updateProfile
};

/**
 * Login function
 *
 * @param email
 * @param password
 * @returns {Promise<Response>}
 */
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return fetch(`/api/login`, requestOptions)
        .then(handlerResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        })
}

/**
 * Register function
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param phone
 * @param password
 * @param password_confirmation
 * @returns {Promise<Response>}
 */
function register(firstName, lastName, email, phone, password, password_confirmation) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({firstName, lastName, email, phone, password, password_confirmation})
    };

    return fetch('/api/register', requestOptions)
        .then(handlerResponse)
        .then(user => {
            return user;
        });
}

/**
 * Logout function
 */
function logout() {
    localStorage.removeItem('user');
}

/**
 * Get auth function
 * @returns {Promise<Response>}
 */
function getAuth() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/api/user', requestOptions).then(handlerResponse);
}

/**
 * Update profile
 *
 * @param id
 * @param name
 * @param email
 * @returns {Promise<Response>}
 */
function updateProfile(id, name, email) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({id: id, name: name, email: email})
    };

    return fetch('/api/user/profile', requestOptions).then(handlerResponse);
}

/**
 * Handle response function
 *
 * @param response
 * @returns {*}
 */
function handlerResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.errors) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

