import { useForm } from "react-hook-form";
import InputPembicara from "../../../components/InputPembicara";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Pembicara berhasil ditambahkan!");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>
            <p className="mb-4">Form untuk menambahkan pembicara</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 max-w-md"
            >

                <InputPembicara
                    label="Nama Pembicara"
                    name="name"
                    placeholder="Masukkan nama"
                    register={register}
                    error={errors.name?.message}
                />

                <InputPembicara
                    label="Role"
                    name="role"
                    placeholder="Masukkan role"
                    register={register}
                    error={errors.role?.message}
                />

                <button className="bg-red-900 text-white p-2 rounded-xl">
                    Simpan
                </button>
            </form>
        </div>
    );
}