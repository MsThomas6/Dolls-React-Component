import { lazy } from 'react';

const Landing = lazy(() => import('../pages/landing/'));
const PageNotFound = lazy(() => import('../pages/error/PageNotFound'));
const ServerError = lazy(() => import('../pages/error/ServerError'));
const Venues = lazy(() => import('../pages/venues/Venues'));
const Mentors = lazy(() => import('../mentorsPublic/Mentor'));
const FAQ = lazy(() => import('../pages/landing/FAQ'));
const BlogPage = lazy(() => import('../pages/blogs/BlogPage'));
const Blogs = lazy(() => import('../pages/blogs/Blogs'));
const Comments = lazy(() => import('../components/comments/Comments'));
const Resources = lazy(() => import('../components/resources/ResourcesPublic'));
const Register = lazy(() => import('../components/users/Register'));
const LoginAccount = lazy(() => import('../components/users/Login'));
const Donations = lazy(() => import('../components/donations/Donation'));
const ContactUs = lazy(() => import('../pages/landing/ContactUs'));
const DonationConfirm = lazy(() => import('../components/donations/DonationConfirm'));

const routes = [
    {
        path: '/',
        name: 'Landing',
        exact: true,
        element: Landing,
        roles: [],
        isAnonymous: true,
    },

    {
        path: '/mentors',
        name: 'Mentors',
        exact: true,
        element: Mentors,
    },
    {
        path: '/venues',
        name: 'Venues',
        exact: true,
        element: Venues,
    },
    {
        path: '/faq',
        name: 'FAQ',
        exact: true,
        element: FAQ,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/donate',
        name: 'Donation',
        exact: true,
        element: Donations,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/contactus',
        name: 'contactus',
        exact: true,
        element: ContactUs,
        roles: [],
        isAnonymous: true,
    },
];

const errorRoutes = [
    {
        path: '/error-500',
        name: 'Error - 500',
        element: ServerError,
        roles: [],
        exact: true,
        isAnonymous: true,
    },

    {
        path: '*',
        name: 'Error - 404',
        element: PageNotFound,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];

const blogRoutes = [
    {
        path: '/blogs',
        name: 'blogs',
        exact: true,
        element: Blogs,
        roles: [],
        isAnonymous: true,
        children: [
            {
                path: '/blogs/blogPage/:blogid',
                name: 'viewBlog',
                exact: true,
                element: BlogPage,
                roles: [],
                isAnonymous: true,
            },
        ],
    },
];

const donationRoutes = [
    {
        path: '/donate',
        name: 'Donation',
        header: 'Navigation',
        exact: true,
        element: Donations,
        roles: [],
        isAnonymous: true,
        children: [
            {
                path: '/donate/confirmation',
                name: 'DonationConfirm',
                element: DonationConfirm,
                roles: [],
                isAnonymous: true,
            },
        ],
    },
];

const resourceRoute = [
    {
        path: '/resources',
        name: 'resourcesPublic',
        exact: true,
        element: Resources,
        roles: [],
        isAnonymous: true,
    },
];

const loginRoutes = [
    {
        path: '/login',
        name: 'Login',
        element: LoginAccount,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];

const registerRoutes = [
    {
        path: '/register',
        name: 'Register',
        element: Register,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];

const commentRoutes = [
    {
        path: '/comments',
        name: 'Comments',
        exact: true,
        element: Comments,
        roles: [],
        isAnonymous: true,
    },
];

var allRoutes = [
    ...routes,
    ...errorRoutes,
    ...blogRoutes,
    ...loginRoutes,
    ...registerRoutes,
    ...donationRoutes,
    ...resourceRoute,
    ...commentRoutes,
];

export default allRoutes;
