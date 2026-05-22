import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PembicaraIndex() {
    const [pembicara, setPembicara] = useState([]);

    useEffect(() => {
            fetch("http://localhost:3000/pembicara")
                .then((res) => res.json())
                .then((data) => {
                    setPembicara(data);
                });
        }, []);

        const handleDelete = async (id: number) => {
        try {
            const response = await fetch(
                `http://localhost:3000/pembicara/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                alert("Pembicara berhasil dihapus");

                setPembicara(
                    pembicara.filter((cat: any) => cat.id !== id)
                );
            } else {
                alert("Gagal menghapus pembicara");
            }
        } catch (error) {
            console.error(error);
        }
    };

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

                        <div className="flex gap-2">
                            <Link
                                to={`/dashboard/pembicara/edit/${item. id}`}
                                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Edit
                            </Link>

                            <button
                                onClick={() => handleDelete(item. id)}
                                className="mt-4 inline-block px-4 py-2 bg-red-900 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
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