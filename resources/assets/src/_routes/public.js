import {Gallery} from '../components/Gallery';
import {Home} from '../components/Home';
import {App} from '../components/App';
import {Contact} from '../components/Contact';
import {Services, Service} from '../components/Services';
import {About} from '../components/About';

/**
 * @type {*[]}
 */
export const publicRoutes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/gallery',
                component: Gallery
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/services',
                component: Services,
                routes: [
                    {
                        path: '/services/:id',
                        component: Service
                    }
                ]
            }
        ]
    }
];