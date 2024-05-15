import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import home from '../../../public/home.svg'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Login = () => {
    const { signInWithGoogle, setUser, logInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignIn = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await logInUser(email, password)
            const { data } = await axios.post('https://service-provider-20102.web.app/jwt', {
                email: result?.user?.email,
            }, { withCredentials: true })
            console.log(data);
            setUser(result.user)
            toast.success(`${result?.user?.displayName} have logged in successfully`)
            navigate(location.state || '/');
        }
        catch (error) {
            console.log(error);
        }
    }



    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            const { data } = await axios.post('https://service-provider-20102.web.app/jwt', {
                email: result?.user?.email,
            }, { withCredentials: true })
            console.log(data);
            setUser(result.user)
            toast.success(`${result?.user?.displayName} have logged in successfully`)
            navigate(location.state || '/');
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md text-black">
            <Helmet>
                <title>Login</title>
                <link rel="icon" type="image/svg+xml" href={home} />
            </Helmet>
            <h2 className="text-lg font-semibold capitalize dark:text-white"> SignUp Now</h2>

            <form onSubmit={handleSignIn}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div>
                        <label className=" " htmlFor="emailAddress">Email Address <span className="text-red-600">*</span></label>
                        <input id="emailAddress" type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className=" " htmlFor="password">Password <span className="text-red-600">*</span></label>
                        <input id="password" type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <input type="submit" value="Sign In" className="btn btn-info btn-outline w-full" />
                </div>
            </form>
            <h2
                className="w-1/2 mx-auto">Do not have an account? <Link to={"/register"} className="btn btn-link">Register</Link></h2>
            <div
                onClick={handleGoogleSignIn}
                className='flex cursor-pointer items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 '>
                <div className='px-4 py-2'>
                    <FcGoogle className="text-2xl" />
                </div>
                <span className=' px-4 py-3 font-medium text-center'>
                    Sign in with Google
                </span>
            </div>
        </section>)
};


export default Login;