import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            <Navbar className="z-50" />
            <div className="w-11/12 mx-auto -z-40">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;