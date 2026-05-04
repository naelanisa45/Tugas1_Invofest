import { Link } from "react-router-dom";
import { useState } from "react";


export default function EventIndex() {
    const [ events ] = useState([
        {
            title: "UI/UX Design",
            date: "12 Oktober 2025",
        },
        {
            title: "Web Development",
            date: "25 Oktober 2025",
        },
        {
            title: "Artifical Intelligence",
            date: "20 oktober 2025",
        },
        {
            title: "Cyber Security",
            date: "19 Oktober2025",
        },
    ]);

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
                        <h2 className="font-semibold text-lg">{event.title}</h2>
                        <p className="text-gray-500 text-sm">{event.date}</p>
                    </div>
                ))}
            </div>

            <Link
                to="/dashboard/event/create"
                className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded"
            >
                Tambah Event
            </Link>
        </div>
    );
}