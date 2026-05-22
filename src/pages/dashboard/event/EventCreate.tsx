import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


type FormData = {
    name: string;
    location:string;
    dateEvent: string;
    description: string;
    categoryId: number;
    pembicaraId: number;
};

const schema = z.object({
    name: z.string().min(1, "Nama event tidak boleh kosong"),
    location: z.string().min(1, "Lokasi tidak boleh kosong"),
    dateEvent: z.string().min(1, "Tanggal tidak boleh kosong"),
    description: z.string().min(1, "Deskripsi tidak boleh kosong"),
    categoryId: z.coerce.number(),
    pembicaraId: z.coerce.number(),
});

export default function EventCreate() {
    const [categories, setCategories] = useState([]);
    const [pembicara, setPembicara] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));

    fetch("http://localhost:3000/pembicara")
        .then((res) => res.json())
        .then((data) => setPembicara(data));
}, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(
                "http://localhost:3000/events",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Event berhasil ditambahkan");
                navigate("/dashboard/event");
            } else {
                alert("Gagal menambahkan event");
            }
        } catch (error) {
            console.error(error);
        }
};

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>
            <p className="mb-4">Form untuk menambahkan event</p>

            <form
                onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
            
            <Input
                label="Nama Event"
                name="name"
                register={register}
                error={errors.name?.message}
            />
            
            <Input
                label="Tanggal"
                name="dateEvent"
                register={register}
                error={errors.dateEvent?.message}
            />

            <Input
                label="Lokasi"
                name="location"
                register={register}
                error={errors.location?.message}
            />

            <Input
                label="Deskripsi"
                name="description"
                register={register}
                error={errors.description?.message}
            />

            <select
                {...register("categoryId")}
                className="border p-2 rounded"
            >
                <option value="">Pilih Kategori</option>

                {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <select
                {...register("pembicaraId")}
                className="border p-2 rounded"
            >
                <option value="">Pilih Pembicara</option>

                {pembicara.map((item: any) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

            <Button
                title="Simpan"
                type="submit"
                variant="primary"
            />    
        </form>
    </div>
    );
}