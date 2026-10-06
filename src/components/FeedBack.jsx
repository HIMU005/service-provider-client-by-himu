import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../api/baseUrl";

const FeedBack = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleFeedBack = async e => {
        e.preventDefault();
        if (!user) {
            navigate('/login')
        }
        const feedback = {
            message: e.target.feedback.value,
            name: user?.displayName,
            email: user?.email,
        };
        try {
            await axios.post(`${API_URL}/feedback`, feedback)
            toast.success('Feedback submitted successfully')
            e.target.reset();
        } catch (err) {
            toast.error(err.message || 'Failed to submit feedback');
        }


    }
    return (
        <div>
            <form onSubmit={handleFeedBack} >
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your name<span className="text-red-600">*</span></span>
                    </div>
                    <input type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your email<span className="text-red-600">*</span></span>
                    </div>
                    <input type="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " required />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold ">Your feedback <span className="text-red-600">*</span></span>
                    </div>
                    <textarea
                        name="feedback"
                        className='block w-full px-4 py-2 mt-2 rounded-md border border-primary'
                        id='description'
                        required
                    ></textarea>
                </label>
                <input className="btn btn-success w-full rounded-xl btn-outline my-8" type="submit" value="Feedback" />
            </form>
        </div>
    );
};

export default FeedBack;