import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <h2 className="text-center text-5xl font-semibold">404</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])



export default router;