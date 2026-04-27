import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollTop}
            className={`fixed bottom-6 right-6 bg-red-900 text-white p-3 rounded-full shadow-lg border-4 border-red-900 transition-all duration-300 flex items-center justify-center
                ${show ? "opacity-100" : "opacity-0 scale-0"}
            `}
        >
            <ArrowUp size={20} />
        </button>  
    );
};

export default ScrollToTop;