import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryIndex() {

    const [categories, setCategories]= useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(
                `http://localhost:3000/categories/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                alert("Kategori berhasil dihapus");

                setCategories(
                    categories.filter((cat: any) => cat.id !== id)
                );
            } else {
                alert("Gagal menghapus kategori");
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                        className="bg-white shadow rounded-xl p-4 flex flex-col items-center gap-4"
                    >
                        <p className="font-medium text-lg">
                            {cat. name}
                        </p>

                        <div className="flex gap-2">
                            <Link
                                to={`/dashboard/category/edit/${cat. id}`}
                                className="mt-4 w-20 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Edit
                            </Link>

                            <button
                                onClick={() => handleDelete(cat. id)}
                                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            <Link 
                to="/dashboard/category/create"
                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
            >
                Tambah Kategori
            </Link>
        </div>
    );
}