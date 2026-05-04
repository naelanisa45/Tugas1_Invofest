import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryIndex() {
    const [categories, setCategories] = useState([
        { name: "UI/UX Design"},
        { name: "Cyber Security"},
        { name: "Web Development"},
        { name: "Artifical Intelligence"},
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Kategori</h1>
            <p className="mb-6 text-gray-600">
                Daftar Kategori Event
            </p>

            <div className="grid grid-cols-2 gap-4">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-white shadow rounded-xl p-4 text-center font-medium"
                    >
                        {cat.name}
                    </div>
                ))}
            </div>

            <Link 
                to="/dashboard/category/create"
                className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded"
            >
                Tambah Kategori
            </Link>
        </div>
    );
}