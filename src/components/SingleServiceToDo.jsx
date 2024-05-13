import axios from 'axios';
import PropTypes from 'prop-types'; // ES6

const SingleServiceToDo = ({ single, getData }) => {
    const handleUpdateStatus = async (orderId, status) => {
        try {
            await axios.patch(`https://service-provider-phi.vercel.app/bookedService-updateStatus/${single._id}`, { status });
            getData();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    // console.log(single);
    return (
        <tr>

            <td>
                {single.serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">
                    {new Date(single.serviceDate).toLocaleDateString()}
                </span>
            </td>

            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">Mail : {single.userEmail}</div>
                        <div className="text-sm opacity-50">Name:{single.userName}</div>
                    </div>
                </div>

            </td>

            <td className='text-primary font-medium'>{single.servicePrice}</td>
            <th>
                {/* {single.status} */}
                <select
                    onChange={e => handleUpdateStatus(single._id, e.target.value)}
                    defaultValue={single.status}
                    disabled={single.status === "Completed"}
                    className={
                        single.status === "Completed" ? "text-green-600" :
                            single.status === "Working" ? "text-yellow-500" :
                                "text-blue-500"}
                >
                    <option value="Pending">Pending</option>
                    <option value="Working">Working</option>
                    <option value="Completed">Completed</option>
                </select>

            </th>
        </tr >
    );
};

export default SingleServiceToDo;
SingleServiceToDo.propTypes = {
    single: PropTypes.object,
    getData: PropTypes.func,
}