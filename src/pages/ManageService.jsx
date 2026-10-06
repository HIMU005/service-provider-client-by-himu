import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import SingleManage from "../components/SingleManage";
import { Helmet } from "react-helmet-async";
import home from '../../public/home.svg'
import { API_URL } from "../api/baseUrl";

const ManageService = () => {
    const { user } = useAuth();
    const [manageData, setManageData] = useState([]);

    useEffect(() => {
        if (user?.email) {
            getPatchedData();
        }
    }, [user])

    const getPatchedData = async () => {
        try {
            const { data } = await axios(`${API_URL}/services/${user?.email}`);
            setManageData(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Manage service</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <h2>My Posted Data <span className="bg-sky-300 rounded-md w-40 text-blue-800 px-4">{manageData.length}  </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    manageData.map(manage => <SingleManage key={manage._id} single={manage} getPatchedData={getPatchedData} ></SingleManage>)
                }
            </div>
        </div>
    );
};

export default ManageService;