import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <h2 className="text-5xl font-bold">Wait it is loading</h2>

    if (user) return children;
    return <Navigate to={'/login'} state={location.pathname} replace={true} />
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}