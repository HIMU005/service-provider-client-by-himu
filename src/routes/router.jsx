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
                element: <ManageService />,
            },
            {
                path: '/book-service',
                element: <BookService />,
            },
            {
                path: '/service-to-do',
                element: <ServicesToDo />,
            },

        ]
    }
])



export default router;