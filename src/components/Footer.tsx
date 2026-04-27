import { Home, User, Trophy, Wrench, Mic, Video, Globe } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-red-100 mt-16 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LOGO */}
                <div>
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="logo"
                        className="h-14"
                    />
                </div>

                {/* MENU NAVIGASI */}
                <div>
                    <h3 className="font-bold mb-4">MENU NAVIGASI</h3>
                    <ul className="flex flex-col gap-3 text-gray-700">
                        <li className="flex items-center gap-2"><Home size={16}/> Beranda</li>
                        <li className="flex items-center gap-2"><User size={16}/> Seminar</li>
                        <li className="flex items-center gap-2"><Trophy size={16}/> Competition</li>
                        <li className="flex items-center gap-2"><Wrench size={16}/> Workshop</li>
                        <li className="flex items-center gap-2"><Mic size={16}/> Talkshow</li>
                    </ul>
                </div>

                {/* SOSMED */}
                <div>
                    <h3 className="font-bold mb-4">IKUTI KAMI</h3>
                    <div className="flex flex-col gap-3 text-gray-700">
                        <div className="flex items-center gap-2">
                            <Video size={18}/> Instagram
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={18}/> Youtube
                        </div>
                    </div>
                </div>

                {/* MAP */}
                <div>
                    <h3 className="font-bold mb-4">ALAMAT</h3>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.738182495643!2d109.10792000000001!3d-6.868477000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1777167346646!5m2!1sen!2sid"
                    className="w-full h-40 rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-8 pt-4 text-left text-sm text-gray-600">
                © 2025 INVOFEST. All Rights Reserved.
                </div>
        </footer>
    );
};

export default Footer;