import { Helmet } from "react-helmet-async";
import home from '../../public/home.svg'
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <h2>I am home</h2>
        </div>
    );
};

export default Home;