import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SixCard = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])
    const bannerData = loadData.slice(0, 6);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    bannerData.map(single =>
                        <div key={single._id} className='text-black '>
                            <div className="flex flex-col text-black ">
                                <img className='w-full h-96' src={single.serviceImg} alt={single.serviceName} />
                                <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-4 '>{single.serviceName}</h2>
                                <p className='text-sm md:text-base font-normal text-justify'>{single.serviceDescription.substring(0, 100)}...</p>
                                <p className='text-accent'>Price:{single.servicePrice} </p>
                                <p className='text-info'>Area: {single.serviceArea}</p>
                                <h3 className='underline text-amber-400 font-bold text-xl'>Service Provider details </h3>
                                <div>
                                    <img className='w-16 h-16 rounded-full' src={single.serviceProviderInfo.serviceProviderImg} alt={single.serviceProviderInfo.serviceProviderName} />
                                    <h2 className='ml-4'> {single.serviceProviderInfo.serviceProviderName}</h2>
                                </div>
                                <Link to={`/service/${single._id}`} className='btn btn-info btn-outline w-full'>View Details</Link>
                            </div>
                        </div>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link to={'/all-service'} className="btn btn-warning btn-outline my-5">See more</Link>
            </div>
        </div>
    );
};

export default SixCard;