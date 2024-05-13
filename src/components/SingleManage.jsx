import axios from 'axios';
import PropTypes from 'prop-types';
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleManage = ({ single, getPatchedData }) => {
    console.log(single);
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`https://service-provider-phi.vercel.app/service/${single._id}`)
            console.log(data);
            toast.success('Service delete successfully')
            getPatchedData();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='p-4'>
            <div className='text-black '>
                <img className='w-full h-max-[400px]' src={single.serviceImg} alt={single.serviceName} />
                <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-4 '>{single.serviceName}</h2>
                <p className='text-sm md:text-base font-normal text-justify'>{single.serviceDescription.substring(0, 100)}...</p>
                <p className='text-accent'>Price:{single.servicePrice} </p>
                <p className='text-info'>Area: {single.serviceArea}</p>

                <div className=' flex gap-4'>
                    <button
                        onClick={handleDelete}
                        className='btn p-0'><FcDeleteDatabase className='text-4xl font-bold' /></button>
                    <Link to={`/update-service/${single._id}`} className='btn p-0'><FcEditImage className='text-4xl font-bold' /></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleManage;
SingleManage.propTypes = {
    single: PropTypes.object,
    getPatchedData: PropTypes.func,
}