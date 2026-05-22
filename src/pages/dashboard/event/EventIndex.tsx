import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function EventIndex() {
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
                fetch("http://localhost:3000/events")
                    .then((res) => res.json())
                    .then((data) => {
                        setEvents(data);
                    });
            }, []);

            const handleDelete = async (id: number) => {
        try {
            const response = await fetch(
                `http://localhost:3000/events/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                alert("Event berhasil dihapus");

                setEvents(
                    events.filter((cat: any) => cat.id !== id)
                );
            } else {
                alert("Gagal menghapus event");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Event</h1>
            <p className="mb-6 text-gray-600">Daftar Event</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white shadow rounded-xl p-4"
                    >
                        <h2 className="font-semibold text-lg">{event.name}</h2>
                        <p className="text-gray-500 text-sm">
                            {new Date(event.dateEvent).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>

                        <p className="text-sm text-gray-600">
                            {event.location}
                        </p>

                        <p className="text-sm text-gray-600">
                            {event.description}
                        </p>

                        <p>
                            Kategori: {event.category?.name}
                        </p>

                        <p>
                            Pembicara: {event.pembicara?.name}
                        </p>

                        <div className="flex gap-10">
                            <Link
                                to={`/dashboard/event/edit/${event. id}`}
                                className="mt-4 w-20 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Edit
                            </Link>

                            <button
                                onClick={() => handleDelete(event. id)}
                                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                to="/dashboard/event/create"
                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
            >
                Tambah Event
            </Link>
        </div>
    );
}