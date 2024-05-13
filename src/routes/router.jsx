import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import BookService from "../pages/BookService";
import ServicesToDo from "../pages/ServicesToDo";
import PrivateRoute from "./PrivateRoute";
import AllService from "../pages/AllService";
import ServiceDetails from "../pages/ServiceDetails";
import UpdateService from "../pages/UpdateService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <h2 className="text-center text-5xl font-semibold">404</h2>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/add-service',
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>,
            },
            {
                path: '/manage-service',
                element: <PrivateRoute>
                    <ManageService />
                </PrivateRoute>,
            },
            {
                path: "/update-service/:id",
                element: <PrivateRoute>
                    <UpdateService />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-provider-phi.vercel.app/service/${params.id}`)
            },
            {
                path: '/book-service',
                element: <PrivateRoute>
                    <BookService />
                </PrivateRoute>,
            },
            {
                path: '/service-to-do',
                element: <PrivateRoute>
                    <ServicesToDo />
                </PrivateRoute>
            },
            {
                path: '/all-service',
                element: <AllService />,
                loader: () => fetch('https://service-provider-phi.vercel.app/services'),
            },
            {
                path: "/service/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://service-provider-phi.vercel.app/service/${params.id}`)
            },

        ]
    }
])



export default router;