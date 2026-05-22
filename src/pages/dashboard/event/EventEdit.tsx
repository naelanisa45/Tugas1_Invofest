import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

type FormData = {
    name: string;
    location: string;
    dateEvent: string;
    description: string;
    categoryId: number;
    pembicaraId: number;
};

const schema = z.object({
    name: z.string().min(1, "Nama pembicara tidak boleh kosong"),
    location: z.string().min(1, "Lokasi tidak boleh kosong"),
    dateEvent: z.string().min(1, "Tanggal tidak boleh kosong"),
    description: z.string().min(1, "Deskripsi tidak boleh kosong"),
    categoryId: z.coerce.number(),
    pembicaraId: z.coerce.number(),
});

export default function EventEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // ambil data event berdasarkan id
    useEffect(() => {
        fetch(`http://localhost:3000/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setValue("name", data.name);
                setValue("location", data.location);
                setValue("dateEvent", data.dateEvent.split("T")[0]);
                setValue("description", data.description);
                setValue("categoryId", data.categoryId);
                setValue("pembicaraId", data.pembicaraId);
            });
    }, [id, setValue]);

    //update data
    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(
                `http://localhost:3000/events/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Event berhasil diupdate");
                navigate("/dashboard/event");
            } else {
                alert("Gagal update event");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Edit Event
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
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
                    name="Description"
                    register={register}
                    error={errors.description?.message}
                />
                
                <Button
                    title="Update"
                    type="submit"
                    variant="primary"
                />
            </form>
        </div>
    );
}