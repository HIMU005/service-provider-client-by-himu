import { useLoaderData } from "react-router-dom";
import SingleServiceCard from "../components/SingleServiceCard";
import { Helmet } from "react-helmet-async";

const AllService = () => {
    const allServiceData = useLoaderData();
    return (
        <div className="container">
            <Helmet>
                <title>All service</title>
            </Helmet>
            <h2 className="bg-sky-300 rounded-md w-40 text-blue-800 px-4">{allServiceData.length} service available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    allServiceData.map(singleServiceData =>
                        <SingleServiceCard key={singleServiceData._id} single={singleServiceData} />
                    )
                }
            </div>
        </div>
    );
};

export default AllService;