import {Contact} from "../components/Contact";
import {Login} from "../components/Login";
import {Gallery} from "../components/Gallery";
import {Services} from "../components/Services";
import {Register} from "../components/Register";
import {About} from "../components/About";
import {Home} from "../components/Home";

export const guestRoutes = [
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
];