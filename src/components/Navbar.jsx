import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
    const { user, logOut } = useAuth();
    const handleSignOut = () => {
        logOut()
            .then()
    }

    const homeNav = <>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
    </>

    const dashboard = <div className="z-50">
        <li><Link to={'/add-service'}>Add Service</Link></li>
        <li><Link to={'/manage-service'}>Manage Service</Link></li>
        <li><Link to={'/book-service'}>Book Service</Link></li>
        <li><Link to={'/service-to-do'}>Service To Do</Link></li>
    </div>

    const loginRelatedNav = <> {
        !user &&
        <li><Link to={'/login'}>Login</Link></li>
    }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* small device  */}
                        {homeNav}
                        <li>
                            <a>Dashboard</a>
                            <ul className="p-2">
                                {dashboard}
                            </ul>
                        </li>
                        {loginRelatedNav}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Himu Electronics</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {homeNav}
                    <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2">
                                {dashboard}
                            </ul>
                        </details>
                    </li>
                    {loginRelatedNav}
                </ul>
            </div>
            {
                user &&
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div title={user.displayName} className="w-10 rounded-full">
                                <img alt={user.email} src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li onClick={handleSignOut}>Logout</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;
