import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleServiceToDo from "../components/SingleServiceToDo";

const ServicesToDo = () => {
    const { user } = useAuth();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/bookedService-provider/${user?.email}`);
            setAllData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Service to do</title>
            </Helmet>
            <h2>Service to do</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Order Details</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>


                    <tbody>

                        {allData.map(single => <SingleServiceToDo key={single._id} single={single}
                            getData={getData}></SingleServiceToDo>

                        )}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ServicesToDo;