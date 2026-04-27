import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputPassword from "../components/InputPassword";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

type FormData = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
};

const schema = z.object ({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Minimal 8 Karakter"),
    password_confirm: z.string().min(8, "Minimal 8 Karakter"),
});

export default function Register() {
    const {
            register, 
            handleSubmit, 
            formState:{errors}, 
        } = useForm<FormData>({resolver: zodResolver(schema)});

        const onSubmit = (data:FormData) => {
        console.log(data)
        }

        return (
        <div className="container mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2"></div>
        <h1 className="text-3xl font-bold text-center text-red-900 mb-2">
            Register!
        
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
                label="Nama"
                name="name"
                register={register}
                error={errors.name?.message}
            />

            <Input
                label="Email"
                name="email"
                register={register}
                error={errors.email?.message}
            />

            <InputPassword 
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message} 
                />

            <InputPassword
                label="Konfirmasi Password"
                name="password_confirm"
                register={register}
                error={errors.password_confirm?.message} 
                />
                <div>
                    <Button
                        type="submit"
                        className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold mt-4 transition"
                    >
                        Login
                    </Button>
                </div>

                <div>
                    Belum Punya akun? <Link to="/register">Daftar Sekarang</Link>
                </div>
            </form>
        </div>
    
        
        ); 
}