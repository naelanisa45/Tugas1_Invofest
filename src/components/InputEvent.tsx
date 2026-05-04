interface InputEventProps {
    label: string;
    name: string;
    placeholder?: string;
    register: any;
    error?: string;
}

export default function InputEvent({
    label,
    name,
    placeholder,
    register,
    error,
}: InputEventProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">{label}</label>

            <input
                {...register(name)}
                placeholder={placeholder}
                className="border p-2 rounded-lg"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}