import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

type FormData = {
    name: string;
    role: string;
};

const schema = z.object({
    name: z.string().min(1, "Nama pembicara tidak boleh kosong"),
    role: z.string().min(1, "Role tidak boleh kosong"),
});

export default function PembicaraEdit() {
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

    // ambil data category berdasarkan id
    useEffect(() => {
        fetch(`http://localhost:3000/pembicara/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setValue("name", data.name);
                setValue("role", data.role);
            });
    }, [id, setValue]);

    //update data
    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(
                `http://localhost:3000/pembicara/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Pembicara berhasil diupdate");
                navigate("/dashboard/pembicara");
            } else {
                alert("Gagal update pembicara");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Edit Pembicara
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <Input
                    label="Nama Pembicara"
                    name="name"
                    register={register}
                    error={errors.name?.message}
                />

                <Input
                    label="Role"
                    name="role"
                    register={register}
                    error={errors.role?.message}
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