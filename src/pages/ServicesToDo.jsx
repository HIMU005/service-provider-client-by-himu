import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleServiceToDo from "../components/SingleServiceToDo";
import home from '../../public/home.svg'

const ServicesToDo = () => {
    const { user } = useAuth();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://service-provider-phi.vercel.app/bookedService-provider/${user?.email}`);
            setAllData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <h2>Service to do</h2>
            <div className="overflow-x-auto">
                <table className="table -z-10">
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