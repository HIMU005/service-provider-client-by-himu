import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { signInWithGoogle, setUser } = useContext(AuthContext);
    // console.log(googleLogin);
    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                // toast.success(`${result.user.name} have logged in successfully`)
                // navigate(location.state || '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
            <h2 className="text-lg font-semibold capitalize "> SignUp Now</h2>

            <form onSubmit={handleRegister}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className=" " htmlFor="username">Username</label>
                        <input id="username" type="text" name="name" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className=" " htmlFor="emailAddress">Email Address <span className="text-red-600">*</span></label>
                        <input id="emailAddress" type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className=" " htmlFor="photo">PhotoUrl</label>
                        <input id="photo" type="text" name="photo" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="" htmlFor="password">Password <span className="text-red-600">*</span></label>
                        <input id="password" type="password" name="password" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                </div>

                <div className="flex justify-end mt-6 w-full">
                    <input type="submit" value="Register" className="btn btn-info btn-outline w-full" />
                </div>
            </form>
            <h2
                className="w-1/2 mx-auto">Already have an account? <Link to={"/login"} className="btn btn-link">SignUp</Link></h2>

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
        </section>
    );
};

export default Register;