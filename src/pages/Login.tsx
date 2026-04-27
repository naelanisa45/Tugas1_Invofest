import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../components/Input";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import { Link } from "react-router-dom";


type FormData = {
    email: string;
    password: string;
};

const schema = z.object ({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Minimal 8 Karakter"),
});

export default function Login() {
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
            Selamat Datang!
        </h1>

        <p className="text-gray-500 mb-6 text-center">
            Silakan login untuk melanjutkan
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputPassword 
                label="email"
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
                <div>
                    <button 
                    type="submit"
                    className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold mt-4 transition"
                    >
                        Login
                    </button>
                </div>

                <div>
                    Belum Punya akun? <Link to="/register">Daftar Sekarang</Link>
                </div>
            </form>
        </div>
    
    );
}