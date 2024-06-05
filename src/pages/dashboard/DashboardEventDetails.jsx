import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function DashboardEventDetails() {

    const { id } = useParams();

    const [evebtDetails, setevebtDetails] = useState();


    useEffect(() => {
        async function load() {

            const evebtData = await axios.get(`http://localhost:5000/events/${id}`);
            if (evebtData?.status === 200) {
                setevebtDetails(evebtData?.data);
            }
        }

        load();
    }, [id]);

    return (
        <div className="  ">
            <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img src={evebtDetails?.image} alt="Product" className="rounded-lg h-[470px] w-full object-cover" />
                        <div className="flex gap-4 mt-4">
                            <img src={evebtDetails?.image} alt="Thumbnail 1" className="w-24 h-24 rounded-lg object-cover" />
                            <img src="https://via.placeholder.com/100" alt="Thumbnail 2" className="w-24 h-24 rounded-lg object-cover" />
                            <img src="https://via.placeholder.com/100" alt="Thumbnail 3" className="w-24 h-24 rounded-lg object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold">{evebtDetails?.title}</h1>
                        <div className="flex items-center my-4">
                            <span className="text-red-500 text-2xl font-bold">{evebtDetails?.price} $</span>
                            <span className="line-through ml-2 text-gray-500">10% Off</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 mr-2">★★★★★</span>
                            <span>(1 Review)</span>
                        </div>
                        <p className="mb-4">{evebtDetails?.description}</p>

                        <div className="flex gap-4 mb-4 ">
                            <button className="btn btn-outline text-gray-500">Add to wishlist</button>
                            {/* <button className="btn btn-outline">Compare</button> */}
                        </div>
                        <div className=" mb-2"><strong>Type:</strong> {evebtDetails?.category} </div>

                    </div>
                </div>
                <div className="mt-8 border-b " >

                </div>

            </div>
        </div>
    )
}
