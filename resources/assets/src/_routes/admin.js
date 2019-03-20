import {default as AdminServices} from '../components/Admin/scenes/components/Services'
import {default as AdminDashboard} from '../components/Admin/scenes/components/Dashboard'
import {Users} from "../components/Admin/components/Users";
import {Services} from "../components/Admin/components/Services";

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
    },
    {
        path: '/admin/users',
        component: Users
    },
    {
        path: '/admin/services',
        component: Services
    }
];