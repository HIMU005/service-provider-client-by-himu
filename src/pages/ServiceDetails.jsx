import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServicesBooking from "./ServicesBooking";
import { Helmet } from "react-helmet-async";
import home from '../../public/home.svg'

const ServiceDetails = () => {
    const single = useLoaderData();
    // console.log(single);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-12 mx-auto border p-10">
            <Helmet>
                <title>Service details</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <div className="w-2/3 lg:w-1/2 mx-auto">
                <img className='w-full h-max-[400px]' src={single.serviceImg} alt={single.serviceName} />
                <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-4 '>{single.serviceName}</h2>
                <p className='text-sm md:text-base font-normal text-justify'>{single.serviceDescription}</p>
                <p className='text-accent'>Price:{single.servicePrice} </p>
            </div>
            <div className=" flex-1 flex items-center w-1/3 lg:w-1/2 mx-auto">
                <div className="flex flex-col items-center">
                    <img className='w-36 h-36 rounded-full' src={single.serviceProviderInfo.serviceProviderImg} alt={single.serviceProviderInfo.serviceProviderName} />
                    <h2 className='text-xl md:text-2xl lg:text-3xl'>Provider Name: {single.serviceProviderInfo.serviceProviderName}</h2>
                    <p className='text-accent text-xl md:text-2xl lg:text-3xl'>Service Area: {single.serviceArea}</p>
                    <div>
                        <button onClick={openModal} className="btn btn-info btn-outline w-full">Book Now</button>
                        <ServicesBooking isModalOpen={isModalOpen} onClose={closeModal} single={single} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;