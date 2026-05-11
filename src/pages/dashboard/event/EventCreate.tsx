import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";
import Button from "../../../components/Button";


type FormData = {
    title: string;
    date: string;
};

const schema = z.object({
    title: z.string().min(1, "Nama event tidak boleh kosong"),
    date: z.string().min(1, "Tanggal tidak boleh kosong"),
});

export default function EventCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>
            <p className="mb-4">Form untuk menambahkan event</p>

            <form
                onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
            
            <Input
                label="Nama Event"
                name="title"
                register={register}
                error={errors.title?.message}
            />
            
            <Input
                label="Tanggal"
                name="date"
                register={register}
                error={errors.date?.message}
            />

            <Button
                title="Simpan"
                type="submit"
                variant="primary"
            />    
        </form>
    </div>
    );
}