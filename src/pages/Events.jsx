import { useEffect, useState } from "react";
import axios from "axios";
import EventCards from "../components/cards/EventCards";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const response = await axios.get("http://localhost:5000/events");
                if (response.status === 200) {
                    setEvents(response.data);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        load();
    }, []);

    return (
        <div>
            <div className="">
                <div className="item-cente flex justify-center">
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
                        {events.map((event) => (
                            <EventCards key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
