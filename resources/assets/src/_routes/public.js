import { Gallery } from '../components/Gallery';
import { Home } from '../components/Home';
/**
 * @type {*[]}
 */
export const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/gallery',
        component: Gallery
    }
];