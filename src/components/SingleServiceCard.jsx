import PropTypes from 'prop-types'; // ES6

const SingleServiceCard = ({ single }) => {
    console.log(single);
    return (
        <div className=' p-4'>
            <div className='text-black '>
                <img className='w-full h-max-[400px]' src={single.serviceImg} alt={single.serviceName} />
                <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-4 '>{single.serviceName}</h2>
                <p className='text-sm md:text-base font-normal text-justify'>{single.serviceDescription.substring(0, 100)}...</p>
                <p className='text-accent'>Price:{single.servicePrice} </p>
                <p className='text-info'>Area: {single.serviceArea}</p>
                <h3 className='underline text-amber-400 font-bold text-xl'>Service Provider details </h3>
                <div>
                    <img className='w-16 h-16 rounded-full' src={single.serviceProviderInfo.serviceProviderImg} alt={single.serviceProviderInfo.serviceProviderName} />
                    <h2 className='ml-4'> {single.serviceProviderInfo.serviceProviderName}</h2>
                </div>
                <button className='btn btn-info btn-outline w-full'>View Details</button>
            </div>
        </div>
    );
};

export default SingleServiceCard;
SingleServiceCard.propTypes = {
    single: PropTypes.object,
}