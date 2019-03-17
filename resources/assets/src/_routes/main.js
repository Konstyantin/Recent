import {Home} from '../components/Home';
import {App} from '../components/App';
import {Admin} from "../components/Admin/scenes/Admin";
import Client from "../components/Client/Client";
import {clientRoutes} from './client'
import {adminRoutes} from './admin'
import {guestRoutes} from './guest'
import {Guest} from "../components/Guest";


/**
 * @type {*[]}
 */
export const publicRoutes = [
    {
        component: App,
        routes: [
            {
                path: '/admin',
                component: Admin,
                permissions: ['admin'],
                redirect: '/',
                routes: adminRoutes
            },
            {
                path: '/client',
                component: Client,
                routes: clientRoutes
            },
            {
                path: '/',
                component: Guest,
                routes: guestRoutes
            },
        ]
    }
];