import { Helmet } from "react-helmet-async";
import home from '../../public/home.svg'
import Swippp from "../components/Swippp";
import TextRunning from "../components/TextRunning";
import SixCard from "../components/SixCard";
import FeedBack from "../components/FeedBack";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const Home = () => {
    const { user } = useAuth();
    const location = useLocation();
    return (
        <div className="-z-50">
            <Helmet>
                <title>home</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <TextRunning />
            <Swippp className="-z-50 my-16" />
            <SixCard />
            <h2>To feedback us. You need to login first</h2>
            {/* {
                user ? <FeedBack /> : <Navigate to={'/login'} state={location.pathname} replace={true} />
            } */}
            <FeedBack />
        </div>
    );
};

export default Home;