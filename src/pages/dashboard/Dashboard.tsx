import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [categories, setCategories] = useState([]);
    const [events, setEvents] = useState([]);
    const [pembicara, setPembicara] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));

        fetch("http://localhost:3000/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));

        fetch("http://localhost:3000/pembicara")
            .then((res) => res.json())
            .then((data) => setPembicara(data));
    }, []);
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Selamat datang di dashboard Anda!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"> 

            <div 
                onClick={() => navigate("/dashboard/category")}
            >
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <h2 className="text-xl font-semibold">
                    Kategori
                </h2>

                <p className="text-3xl font-bold mt-4">
                    {categories.length}
                </p>
            </div>
            </div>

            <div
                onClick={() => navigate("/dashboard/event")}
            >
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <h2 className="text-xl font-semibold">
                    Event
                </h2>

                <p className="text-3xl font-bold mt-4">
                    {events.length}
                </p>
            </div>
            </div>

            <div 
                onClick={() => navigate("/dashboard/pembicara")}
            >
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <h2 className="text-xl font-semibold">
                    Pembicara
                </h2>

                <p className="text-3xl font-bold mt-4">
                    {pembicara.length}
                </p>
            </div>
            </div>

            
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-bold mb-4">
                        Kategori terbaru
                    </h2>

                    <ul className="space-y-2">
                        <li>UI/UX Design</li>
                        <li>Cyber Security</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow p-5">
                    <h2 className="text-xl font-bold mb-4">
                        Event terbaru
                    </h2>

                    <ul className="space-y-2">
                        <li>Seminar</li>
                        <li>Talkshow</li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl shadow p-5">
                    <h2 className="text-xl font-bold mb-4">
                        Pembicara terbaru
                    </h2>

                    <ul className="space-y-2">
                        <li>Sowam Habibi</li>
                        <li>Derry Agung Triyadi</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}