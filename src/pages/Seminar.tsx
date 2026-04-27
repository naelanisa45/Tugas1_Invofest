import { SpeakerCard } from "../components/SpeakerCard";
import { Collapse } from "../components/Collapse";
import Button from "../components/Button";

export default function Seminar() {
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
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">

      <section id="hero" className="py-10 flex flex-col md:flex-row items-center justify-between gap-10">

        
        <div className="flex-1 space-y-6 pl-6 md:pl-12 ">
          <h1 className="text-4xl md:text-5xl font-medium text-red-900">
            IT Seminar
          </h1>

          <p className="text-2xl font-medium text-red-900">
            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
          </p>

          <p className="text-gray-700 leading-loose">
            Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis. Tujuannya mengubah paradigma dari persaingan menjadi kolaborasi.
          </p>

          <Button title="Daftar Sekarang"  />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="Seminar"
            className="max-w-md w-full"
          />
        </div>
      </section>

      <section className="bg-red-100 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col text-center gap-6">

            <h1 className="text-5xl font-medium text-red-900 text-center mb-4">
              TENTANG IT SEMINAR
            </h1>

            <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-loose">
              Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor.
              <span className="font">
                Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.  
              </span>
                Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            </div>
        </div>
    </section>

    <section className="text-center mt-16 mb-8">
        <h2 className="text-5xl font-medium text-red-900">
          Temui Pembicara Khusus Kami
        </h2>
    </section>

      {/* SPEAKERS */}
      <section id="speaker" className="py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-10">
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