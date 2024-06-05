import axios from "axios";
import { useEffect, useState } from "react";
import EventRow from "../../components/cards/EventRow";

export default function AllEvents() {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    useEffect(() => {
        async function loadEvents() {
            try {
                const response = await axios.get("http://localhost:5000/events");
                if (response.status === 200) {
                    setEvents(response.data);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        loadEvents();
    }, []);

    const handleDeleteClick = (event) => {
        setEventToDelete(event);
        setShowModal(true);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setEventToDelete(null);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/events/${eventToDelete._id}`);
            setEvents(events.filter(event => event._id !== eventToDelete._id));
            setShowModal(false);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    return (
        <div className="overflow-x-auto w-full px-16 py-10 bg-white">
            <h1 className="text-2xl mb-4">Manage All Events</h1>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Detail</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <EventRow key={event._id} event={event} onDeleteClick={() => handleDeleteClick(event)} />
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold">Confirm Delete</h2>
                        <p>Are you sure you want to delete this event?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleCancelDelete} className="btn btn-ghost mr-2">
                                Cancel
                            </button>
                            <button onClick={handleConfirmDelete} className="btn bg-color text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    Deleted successfully!
                </div>
            )}
        </div>
    );
}
