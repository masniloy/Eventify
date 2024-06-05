import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.comfig";
import { useSignOut } from "react-firebase-hooks/auth";

export default function Dashboard() {
    const [signOut] = useSignOut(auth);

    const handleLogout = async () => {
        await signOut();
    };
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className=" w-full h-12  mb-8 flex  lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            className=" drawer-button lg:hidden"
                        >
                            <svg className="fill-current   text-white p-2.5 h-10 w-10" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

                        </label>
                        <h1 className="text-lg text-center w-full mr-10 pt-2">Dashboard</h1>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-60 min-h-screen bg-color text-base-content flex flex-col justify-between ">
                        {/* Sidebar content here */}
                        <div>
                            <li className=" border-b mb-2  rounded-l-lg">
                                <Link to={"/dashboard"}>Dashboard </Link>
                            </li>
                            <li className=" border-b mb-2  rounded-l-lg">
                                <Link to={"/dashboard/allEvents"}>All Event </Link>
                            </li >
                            <li className=" border-b mb-2  rounded-l-lg">
                                <Link to={"/dashboard/addEvent"}>Add Event</Link>
                            </li>
                        </div>
                        <div className=" space-y-3">
                            <Link to={"/"} className="btn bg-transparent  w-full  ">
                                Home
                            </Link><br />
                            <button className="btn bg-transparent  w-full  " onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
