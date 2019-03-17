import {default as AdminServices} from '../components/Admin/scenes/components/Services'
import {default as AdminDashboard} from '../components/Admin/scenes/components/Dashboard'

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
    }
];