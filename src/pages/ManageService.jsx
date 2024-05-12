import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import SingleManage from "../components/SingleManage";

const ManageService = () => {
    const { user } = useAuth();
    const [manageData, setManageData] = useState([]);

    useEffect(() => {
        getPatchedData();
    }, [user])

    const getPatchedData = async () => {
        const { data } = await axios(`http://localhost:5000/services/${user.email}`)
        setManageData(data);

    }
    console.log(manageData);

    return (
        <div>
            <h2>My Posted Data <span className="bg-sky-300 rounded-md w-40 text-blue-800 px-4">{manageData.length}  </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    manageData.map(manage => <SingleManage key={manage._id} single={manage} ></SingleManage>)
                }
            </div>
        </div>
    );
};

export default ManageService;