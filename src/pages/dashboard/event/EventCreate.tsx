import { useForm } from "react-hook-form";
import InputEvent from "../../../components/InputEvent";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    title: string;
    date: string;
};

const schema = z.object({
    title: z.string().min(1, "Judul event tidak boleh kosong"),
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
        alert("Event berhasil ditambahkan!");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>
            <p className="mb-4">Form untuk menambahkan event</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 max-w-md"
            >
                <div>
                    <label className="font-medium">Nama Event</label>
                    <input
                    {...register("title")}
                    className="border p-2 rounded-lg w-full"
                    placeholder="Masukkan nama event"
                    />

                    {errors.title && (
                        <p className="text-red-500 text-sm">
                            {errors.title.message}
                        </p>
                    )}
                </div>

            <div>
                <label className="font-medium">Tanggal</label>
                <input
                {...register("date")}
                className="border p-2 rounded-lg w-full"
                placeholder="Masukkan tanggal"
                />

                {errors.date && (
                    <p className="text-red-500 text-sm">
                        {errors.date.message}
                    </p>
                )}
            </div>

        <button className="bg-red-900 text-white p-2 rounded-xl">
            Simpan
        </button>
        </form>
    </div>
    );
}