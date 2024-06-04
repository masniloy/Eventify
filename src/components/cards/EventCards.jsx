import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function EventCards({ event }) {
    console.log(event);
    return (
        <div className="my-5">
            <Link to={`/mainFoodDetails/${event?.id}`} className="">
                <div className="card w-96 bg-base-100 shadow-md shadow-gray-500 image-full">
                    <figure className="w-full h-60 object-cover"><img className="w-full h-full object-cover" src={event.image} alt="Food" /></figure>
                    <div className="card-body">
                        <div className="flex">

                            <h2 className="card-title text-2xl font-bold w-4/5">{event?.title}</h2>
                            <div className="card-actions justify-end w-1/4 text-color1">
                                <div className=" bg-white font-bold text-color w-full text-center rounded">{event?.category}</div>
                            </div>
                        </div>
                        <p>{event?.description?.length > 70
                            ? event?.description?.slice(0, 70)
                            : event?.description}</p>
                        <h2 className="card-title">{event?.price}$</h2>
                    </div>
                </div>
            </Link>


        </div>
    )
}
