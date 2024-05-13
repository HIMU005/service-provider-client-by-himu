import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const BookService = () => {
    const { user } = useAuth();
    console.log(user.email);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/bookedService/${user?.email}`);
            setAllData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    console.log(allData);
    return (
        <div>
            <Helmet>
                <title>Book service</title>
            </Helmet>
            <h2>Book service</h2>
            <div className="overflow-x-auto -z-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Provider Details</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>


                    <tbody className="-z-50">

                        {
                            allData.map(single => <tr className="-z-20" key={single._id}>
                                <td>
                                    {single.serviceName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {new Date(single.serviceDate).toLocaleString()}
                                    </span>
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">Mail : {single.serviceProvider.serviceProviderEmail}</div>
                                            <div className="text-sm opacity-50">Name:{single.serviceProvider.serviceProviderName}</div>
                                        </div>
                                    </div>

                                </td>

                                <td>{single.servicePrice}</td>
                                <th>
                                    {single.status}
                                </th>
                            </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BookService;