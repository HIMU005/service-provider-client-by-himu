import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import home from '../../public/home.svg'

const UpdateService = () => {
    const single = useLoaderData();
    const navigate = useNavigate();
    console.log(single);

    const handleUpdateService = async e => {
        e.preventDefault();
        const form = e.target;
        const serviceImg = form.serviceImg.value;
        const serviceName = form.serviceName.value;
        const servicePrice = parseFloat(form.servicePrice.value);
        const serviceArea = form.serviceArea.value;
        const serviceDescription = form.serviceDescription.value;

        const serviceUpdateData = {
            serviceImg,
            serviceName,
            servicePrice,
            serviceArea,
            serviceDescription,
        }

        try {
            const { data } = await axios.patch(`https://service-provider-phi.vercel.app/service/${single._id}`, serviceUpdateData)
            console.log(data);
            toast.success('your data update successfully')
            navigate('/manage-service');
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            <Helmet>
                <title>Update service</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <form onSubmit={handleUpdateService} className="w-4/5 mx-auto">
                {/* service img  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Drop your service image link <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" defaultValue={single.serviceImg} name="serviceImg" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service name  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service name <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" defaultValue={single.serviceName} name="serviceName" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service price  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service price <span className="text-red-600">*</span></span>
                    </div>
                    <input type="number" defaultValue={single.servicePrice} name="servicePrice" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service area  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your service area <span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" defaultValue={single.serviceArea} name="serviceArea" placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                {/* service description  */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Short description <span className="text-red-600">*</span></span>
                    </div>
                    <textarea
                        name="serviceDescription"
                        defaultValue={single.serviceDescription}
                        className='block w-full px-4 py-2 mt-2 rounded-md border border-primary'
                        id='description'
                        required
                    ></textarea>
                </label>
                <input className="btn btn-success w-full rounded-xl btn-outline my-8" type="submit" value="Update Service" />
            </form>
        </div>
    );
};

export default UpdateService;