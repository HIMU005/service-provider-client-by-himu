import PropTypes from 'prop-types'; // ES6

const Single = ({ bannerSingleData }) => {
    console.log(bannerSingleData);
    return (
        <div className='-z-50'>
            <div className=" overflow-hidden bg-white rounded-lg shadow-md ">
                <img className="object-cover w-full h-64" src={bannerSingleData.serviceImg} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Service</span>
                        <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:underline" >{bannerSingleData.serviceName}</h2>
                        <p className="mt-2 text-lg text-black ">{bannerSingleData.serviceDescription}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={bannerSingleData.serviceProviderInfo.serviceProviderImg} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-black" role="link">J{bannerSingleData.serviceProviderInfo.serviceProviderName}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
Single.propTypes = {
    bannerSingleData: PropTypes.object,
}