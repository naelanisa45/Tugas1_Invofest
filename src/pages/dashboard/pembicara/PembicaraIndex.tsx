import { Link } from "react-router-dom";
import { useState } from "react";

export default function SpeakerIndex() {
    const [pembicara] = useState([
        {
            name: "Lhuqita Fazry",
            role: "Mobile Developer",
        },
        {
            name: "Danang Avan",
            role: "Cyber Security",
        },
        {
            name: "M. Dendi Purwanto",
            role: "AI Engineer",
        },
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Pembicara</h1>
            <p className="mb-6 text-gray-600">Daftar Pembicara</p>

            <div className="grid grid-cols-2 gap-4">
                {pembicara.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow rounded-xl p-4 text-center font-medium"
                    >
                        <h2 className="font-semibold text-lg">{item.name}</h2>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                ))}
            </div>

            <Link 
                to="/dashboard/pembicara/create" 
                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
            >
                    Tambah Pembicara
                </Link>


        </div>
    )
}