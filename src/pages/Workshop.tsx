import Button from "../components/Button"
import { SpeakerCard } from "../components/SpeakerCard";
import { Collapse } from "../components/Collapse";
import { Calendar, Clock, MapPin, Code, Smartphone, Shield } from "lucide-react";

export default function Workshop() {

    const collapseItems = [
    {
      title: "Apa itu Invofest",
      deskripsi:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diadakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan",
      deskripsi:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan 27 November 2025. Workshop, seminar, talkshow offline di Kampus 1 Universitas Harkat Negeri dan kompetisi online.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      deskripsi: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      deskripsi:
        "Pemenang akan diinformasikan melalui Instagram @invofest_harkatnegeri.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      deskripsi:
        "Pemenang mendapatkan trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      deskripsi:
        "Buka website invofest, pilih event, klik registrasi, lalu isi Google Form.",
    }
  ];

    const speakers = [
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];
    return (
        <div className="max-w-7xl mx-auto">
        
              <section id="hero" className="py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
                
                <div className="flex-1 space-y-6 pl-6 md:pl-12">
                  <h1 className="text-4xl md:text-5xl font-medium text-red-900">
                    IT Workshop
                  </h1>
        
                  <p className="text-2xl font-medium text-red-900">
                    “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
                  </p>
        
                  <p className="text-gray-700 leading-loose">
                    IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
                  </p>
        
                  <Button title="Daftar Sekarang" />
                </div>

                <div className="flex-1 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt="Workshop"
            className="max-w-md w-full"
          />
        </div>
    </section>

    <section className="bg-red-100 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col text-center gap-6">

            <h1 className="text-4xl font-medium text-red-900 text-center mb-4">
              Tentang IT Workshop
            </h1>

            <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-loose">
               Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. 
              <span className="font">
                Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan.   
              </span>
                Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.


            </p>
            </div>
        </div>
    </section>

    <section className="text-center mt-16 mb-8">
        <h2 className="text-5xl font-medium text-red-900">
          Temui Pembicara Khusus Kami
        </h2>
      </section>

    <section id="speaker" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={index}
                  name={speaker.name}
                  role={speaker.role}
                  imageUrl={speaker.imageUrl}
                />
              ))}
            </div>
    </section>

    <section className="bg-red-100 py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col gap-12">

    <h1 className="text-4xl md:text-5xl font-medium text-center text-red-900">
      Pelaksanaan IT Workshop
    </h1>

    {/* GRID ATAS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* CARD 1 */}
      <div className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900 hover:scale-[1.02] transition-all">
        <div className="bg-red-900 text-white p-6 rounded-2xl">
          <Code size={32} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mobile Development
          </h2>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            Selasa, 25 November 2025
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            08.00 WIB - 16.30 WIB
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            Lab Kom D.1
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900 hover:scale-[1.02] transition-all">
        <div className="bg-red-900 text-white p-6 rounded-2xl">
          <Smartphone size={32} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Artificial Intelligence
          </h2>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            Selasa, 25 November 2025
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            08.00 WIB - 16.30 WIB
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            Lab Kom D.2
          </div>
        </div>
      </div>
    </div>

    {/* CARD BAWAH */}
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 flex gap-6 items-center bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900 hover:scale-[1.02] transition-all">

        <div className="bg-red-900 text-white p-6 rounded-2xl">
          <Shield size={32} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Cyber Security
          </h2>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            Rabu, 26 November 2025
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            08.00 WIB - 16.30 WIB
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            Lab Kom D.1
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



    <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl font text-gray-600 mb-3">
                FAQ
            </h2>

            <h3 className="text-3xl font-bold text-gray-600 mb-3">
                Punya Pertanyaan? Lihat <br />
                <span className="text-red-900">Disini</span>
            </h3>

            <p className="text-gray-600 leading-relaxed">
                Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat <br />
                daftar pertanyaan di bawah ini.
            </p>
        </div>
    </section>

    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {collapseItems.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            deskripsi={item.deskripsi}
          />
        ))}
      </div>

    </div>
    );
}