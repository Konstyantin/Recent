import {default as AdminServices} from '../components/Admin/scenes/components/Services'
import {default as AdminDashboard} from '../components/Admin/scenes/components/Dashboard'
import {Users} from "../components/Admin/scenes/components/Users";
import {List} from "../components/Admin/scenes/components/Services/scenes/components/List";
import {Create} from "../components/Admin/scenes/components/Services/scenes/components/Create";
import {Mails} from "../components/Admin/scenes/components/Mails";
import {guestRoutes} from "./guest";
import {Edit} from "../components/Admin/scenes/components/Services/scenes/components/Edit";

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
            },
            {
                path: '/admin/services/edit/:id',
                component: Edit
            }
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