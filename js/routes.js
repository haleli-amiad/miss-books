import bookDetails from './pages/book-details.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import aboutUs from './pages/about.cmp.js';
import homePage from './pages/homepage.cmp.js';
const myRoutes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]
export const myRouter = new VueRouter ({ routes: myRoutes })


