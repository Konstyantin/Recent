import {default as AdminServices} from '../components/Admin/scenes/components/Services'
import {default as AdminDashboard} from '../components/Admin/scenes/components/Dashboard'
import {Users} from "../components/Admin/components/Users";
import {Services, List, Create} from "../components/Admin/components/Services";
import {Mails} from "../components/Admin/components/Mails";
import {guestRoutes} from "./guest";

export const adminRoutes = [
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
        routes: [
            {
                path: '/admin/services',
                exact: true,
                component: List
            },
            {
                path: '/admin/services/create',
                component: Create,
                routes: guestRoutes
            },
        ]
    },
    {
        path: '/admin/users',
        component: Users
    },
    {
        path: '/admin/mails',
        component: Mails
    }
];