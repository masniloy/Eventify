import { Link } from "react-router-dom";

export default function Navbar() {
    return (

        <div className="">

            <div className="navbar backdrop-blur-sm ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-color">

                            <Link to={"/"}><li><a>Home</a></li></Link>
                            <Link to={"menus"}><li><a>Events</a></li></Link>
                            <Link to={"about"}><li><a>About</a></li></Link>

                            <Link to={"contact"}><li><a>Contact</a></li></Link>


                            {/* {!user?.email ?
                                <>

                                </> :
                                <>
                                    <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>
                                </>
                            } */}

                        </ul>
                    </div>
                    <Link to={"/"}><a className="btn  bg-transparent text-xl sm:w-40 hover:bg-transparent  border-none">Eventify</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"menus"}><li><a>Events</a></li></Link>
                        <Link to={"about"}><li><a>About</a></li></Link>

                        <Link to={"contact"}><li><a>Contact</a></li></Link>
                        {/* {!user?.email ?
                            <>

                            </> :
                            <>
                                <Link to={"/dashboard"}><li><a>Dashboard</a></li></Link>
                            </>
                        } */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {!user?.email ? */}
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost  avatar">
                                <div className="">

                                    <a className="justify-between">
                                        <svg className="fill-current  text-black h-5 w-5" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>

                                    </a>

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow backdrop-blur-sm rounded-box w-52 z-50">
                                <Link to={"login"}><li><a>Login</a></li></Link>
                                <Link to={"register"}><li><a>Register</a></li></Link>

                            </ul>
                        </div>

                    </> :
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-9 rounded-full">
                                    {/* <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> */}
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow backdrop-blur-sm rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {/* {user?.displayName} */}


                                    </a>
                                    <a className="justify-between text-xs">

                                        {/* {user?.email} */}

                                    </a>
                                </li>
                                <Link className="mt-5 border border-white rounded-lg" onClick={async () => {
                                    // const success = await signOut();
                                }} to={"/"}><li><a>Logout</a></li></Link>

                            </ul>
                        </div>
                    </>
                    {/* } */}

                </div>

            </div>

        </div >

    )
}
