import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

//definisikan field yang ada pada form tambah kategori event
type FormData = {
    name: string;
};

const schema = z.object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
});

export default function CategoryCreate() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(
                "http://localhost:3000/categories",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Kategori berhasil ditambahkan");
                navigate("/dashboard/category");
            } else {
                alert("Gagal menambahkan kategori");
            }
        } catch (error) {
            console.error(error);
        }
};


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Kategori</h1>
            <p className="mb-4">Form untuk menambahkan kategori event</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input 
                    label = "Nama Kategori" 
                    name="name" 
                    register={register} 
                    error={errors.name?.message} 
                />

                <Button 
                    title ="Simpan"
                    type="submit"
                    variant="primary"
                />
            

            </form>
        </div>
    );
}