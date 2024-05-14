import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import home from '../../public/home.svg'

const BookService = () => {
    const { user } = useAuth();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://service-provider-phi.vercel.app/bookedService/${user?.email}`);
            setAllData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Book service</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <div className="overflow-x-auto -z-20">
                <table className="table -z-30">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Provider Details</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allData.map(single => <tr className="-z-20" key={single._id}>
                                <td>
                                    {single.serviceName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {new Date(single.serviceDate).toLocaleDateString()}
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
                                <th className={
                                    single.status === "Completed" ? "text-green-600" :
                                        single.status === "Working" ? "text-yellow-500" :
                                            "text-blue-500"}
                                >
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