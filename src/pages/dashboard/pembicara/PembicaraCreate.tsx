import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";
import Button from "../../../components/Button";


type FormData = {
    name: string;
    role: string;
};

const schema = z.object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
    role: z.string().min(1,  "Role tidak boleh kosong"),
});

export default function SpeakerCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ 
        resolver: zodResolver(schema) 
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(
                "http://localhost:3000/pembicara",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Pembicara berhasil ditambahkan");
            } else {
                alert("Gagal menambahkan pembicara");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>
            <p className="mb-4">Form untuk menambahkan pembicara</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
               <Input
                    label = "Nama Pembicara" 
                    name="name" 
                    register={register} 
                    error={errors.name?.message} 
                />

                <Input
                    label = "Role"
                    name="role"
                    register={register}
                    error={errors.role?.message}
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