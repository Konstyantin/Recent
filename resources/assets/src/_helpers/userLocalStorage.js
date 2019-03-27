export function getUserLocalStorage() {
    return JSON.parse(localStorage.getItem('user'));
}