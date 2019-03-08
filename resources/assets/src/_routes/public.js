import {Gallery} from '../components/Gallery';
import {Home} from '../components/Home';
import {App} from '../components/App';
import {Contact} from '../components/Contact';
import {Services} from '../components/Services';
import {About} from '../components/About';
import {Login} from '../components/Login';
import {Register} from '../components/Register';
import {Admin} from "../components/Admin/scenes/Admin";
import Client from "../components/Client/Client";
import {default as AdminServices} from '../components/Admin/scenes/components/Services'
import {default as AdminDashboard} from '../components/Admin/scenes/components/Dashboard'

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
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/register',
                component: Register
            },
            {
                path: '/admin',
                component: Admin,
                permissions: ['admin'],
                redirect: '/',
                routes: [
                    {
                        path: '/admin',
                        permissions: ['admin'],
                        exact: true,
                        redirect: '/',
                        component: AdminDashboard
                    },
                    {
                        path: '/admin/services',
                        permissions: ['admin'],
                        redirect: '/',
                        component: AdminServices,
                    }
                ]
            },
            {
                path: '/client',
                component: Client
            }
        ]
    }
];