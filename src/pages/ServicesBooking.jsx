import Modal from 'react-modal';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { toast } from 'react-toastify';

const ServicesBooking = ({ isModalOpen, onClose, single }) => {
    // console.log(single);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    console.log(user);

    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const serviceId = single._id;
        const serviceName = single.serviceName;
        const serviceImg = single.serviceImg;
        // const serviceProviderInfo = {
        const serviceProviderName = single.serviceProviderInfo.serviceProviderName;
        const serviceProviderEmail = single.serviceProviderInfo.serviceProviderEmail;
        // };
        const servicePrice = single.servicePrice;
        const userEmail = user?.email;
        if (serviceProviderEmail === userEmail) {
            return toast.error("Access is not granted")
        }
        const userName = user?.displayName;
        const serviceDate = startDate;
        const instructions = form.instructions.value;
        const status = "Pending";

        console.log(serviceId, serviceName, serviceImg, serviceProviderName, serviceProviderEmail, userEmail, userName, serviceDate, servicePrice, instructions, status);
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onClose}
            contentLabel="Booking Modal"
        >
            <button onClick={onClose} className="btn btn-circle btn-outline bg-red-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <form onSubmit={handleUpdate} >
                {/* row 1 */}
                <div className='flex justify-between flex-col md:flex-row gap-5'>
                    {/* service id  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold "> Service ID <span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single._id} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                    {/* service name  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Service Name<span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single.serviceName} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                </div>

                {/* row 2 */}
                <div className='flex justify-between flex-col md:flex-row gap-5'>
                    {/* service image  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Service image link <span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single.serviceImg} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                    {/* service provider email  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Service provider email<span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single.serviceProviderInfo.serviceProviderEmail} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                </div>
                {/* row 3 */}
                <div className='flex justify-between flex-col md:flex-row gap-5'>
                    {/* service id  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Service provider name<span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single.serviceProviderInfo.serviceProviderName} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                    {/* service img  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Your Email <span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                </div>
                {/* row 4 */}
                <div className='flex justify-between flex-col md:flex-row gap-5'>
                    {/* service id  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Your Name <span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                    {/* service img  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold ">Service taking date <span className="text-red-600">*</span></span>
                        </div>
                        <DatePicker className="border p-2 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} required />
                    </label>
                </div>
                {/* row 5 */}
                <div className='flex justify-between flex-col md:flex-row gap-5'>
                    {/* service id  */}
                    <label className="form-control w-1/2">
                        <div className="label">
                            <span className="label-text font-semibold ">Total Cost <span className="text-red-600">*</span></span>
                        </div>
                        <input type="text" defaultValue={single.servicePrice} placeholder="Type here" className="input input-bordered w-full " disabled />
                    </label>
                </div>
                {/* service description  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Give your instruction<span className="text-red-600">*</span></span>
                    </div>
                    <textarea
                        name="instructions"
                        className='block w-full px-4 py-2 mt-2 rounded-md border border-primary'
                        id='description'
                        required
                    ></textarea>
                </label>
                <input className="btn btn-success w-full rounded-xl btn-outline my-8" type="submit" value="Confirm" />

            </form>

        </Modal>
    );
};
export default ServicesBooking;
ServicesBooking.propTypes = {
    isModalOpen: PropTypes.func,
    onClose: PropTypes.func,
    single: PropTypes.object,
}