import { Helmet } from "react-helmet-async";
import home from '../../public/home.svg'
import Swippp from "../components/Swippp";
import TextRunning from "../components/TextRunning";
import SixCard from "../components/SixCard";
const Home = () => {
    return (
        <div className="-z-50">
            <Helmet>
                <title>home</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <TextRunning />
            <Swippp className="-z-50 my-16" />
            <SixCard />
        </div>
    );
};

export default Home;