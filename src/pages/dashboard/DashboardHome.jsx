import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.comfig";



export default function DashboardHome() {
    const [user] = useAuthState(auth);

    return (
        <div className=" ">
            <div className="flex items-center justify-center  ">
                <div className="p-10 w-full   ">
                    <div className="flex justify-center">
                        <img
                            className="w-32 h-32 rounded-full border-2 border-color"
                            src={user?.photoURL}
                            alt="Profile picture"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                        <p className="text-gray-500 text-sm">{user?.email}</p>

                        <p className="mt-2 text-sm">Street number & name, Apartment, City, zip code, Country Name</p>

                    </div>


                </div>


            </div>



        </div>
    )
}
