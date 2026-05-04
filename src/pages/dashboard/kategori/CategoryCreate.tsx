import { useForm } from "react-hook-form";
import InputCategory from "../../../components/InputCategory";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    category: string;
    category_id: string;
};

const schema = z.object({
    category: z.string().min(1, "Category tidak boleh kosong"),
    category_id: z.string().min(1, "Category ID tidak boleh kosong"),
});

export default function CategoryCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Kategori berhasil ditambahkan!");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tambah Kategori</h1>
            <p className="mb-4">Form untuk menambahkan kategori event</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 max-w-md"
            >
                <InputCategory
                    label="Name Category"
                    name="category"
                    placeholder="Masukkan nama category"
                    register={register}
                    error={errors.category?.message}
                />

                <InputCategory
                    label="Category ID"
                    name="category_id"
                    placeholder="Masukkan ID kategori"
                    register={register}
                    error={errors.category_id?.message}
                />

                <button
                    type="submit"
                    className="bg-red-900 text-white p-2 rounded-xl"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}