import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const AddService = () => {
    const { user } = useAuth();

    const handleAddService = async e => {
        e.preventDefault();
        const form = e.target;
        const serviceImg = form.serviceImg.value;
        const serviceName = form.serviceName.value;
        const servicePrice = parseFloat(form.servicePrice.value);
        const serviceArea = form.serviceArea.value;
        const serviceDescription = form.serviceDescription.value;

        const servicePostData = {
            serviceImg,
            serviceName,
            servicePrice,
            serviceArea,
            serviceDescription,
            serviceProviderInfo: {
                serviceProviderName: user?.displayName,
                serviceProviderImg: user?.photoURL,
                serviceProviderEmail: user?.email,
            }
        }
        console.log(servicePostData);
        console.log(typeof servicePrice);
        try {
            const { data } = await axios.post('http://localhost:5000/services', servicePostData)
            console.log(data);
            toast.success('your data add successfully')
        } catch (err) {
            console.log(err);
        }

    }
    return (
        // who provide service 
        <div>
            <form onSubmit={handleAddService} className="w-4/5 mx-auto">
                {/* service img  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Drop your service image link <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" name="serviceImg" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service name  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service name <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" name="serviceName" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service price  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service price <span className="text-red-600">*</span></span>
                    </div>
                    <input type="number" name="servicePrice" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service area  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service area <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" name="serviceArea" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service description  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Short description <span className="text-red-600">*</span></span>
                    </div>
                    <textarea
                        name="serviceDescription"
                        className='block w-full px-4 py-2 mt-2 rounded-md border border-primary'
                        id='description'
                        required
                    ></textarea>
                </label>
                <input className="btn btn-success w-full rounded-xl btn-outline my-8" type="submit" value="Add Service" />


            </form>
        </div>
    );
};

export default AddService;