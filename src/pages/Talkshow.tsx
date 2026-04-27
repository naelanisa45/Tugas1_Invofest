import Button from "../components/Button"
import { SpeakerCard } from "../components/SpeakerCard";
import { Collapse } from "../components/Collapse";

export default function Talkshow() {

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
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png", 
    },
  ];
    return (
        <div className="max-w-7xl mx-auto">
        
              <section id="hero" className="py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
                
                <div className="flex-1 space-y-6 pl-6 md:pl-12">
                  <h1 className="text-4xl md:text-5xl font-medium text-red-900">
                    IT Talkshow
                  </h1>
        
                  <p className="text-2xl font-medium text-red-900">
                    “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
                  </p>
        
                  <p className="text-gray-700 leading-loose">
                    Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
                  </p>
        
                  <Button title="Daftar Sekarang" />
                </div>

                <div className="flex-1 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="Workshop"
            className="max-w-md w-full"
          />
        </div>
    </section>

    <section className="bg-red-100 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col text-center gap-6">

            <h1 className="text-4xl font-medium text-red-900 text-center mb-4">
              Tentang IT Talkshow
            </h1>

            <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-loose">
               Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” 
              <span className="font">
                Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI.  
              </span>
                Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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

    
        <h1 className="text-5xl md:text-15xl font-medium text-center text-red-900">
            Pelaksanaan IT Talkshow
        </h1>

    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      
      <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900">
        <div className="bg-red-900 text-white p-4 rounded-xl">
          📅
        </div>
        <p className="text-lg text-gray-700">
          Senin, 24 November 2025
        </p>
      </div>

    
      <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900">
        <div className="bg-red-900 text-white p-4 rounded-xl">
          ⏰
        </div>
        <p className="text-lg text-gray-700">
          08.00 WIB - 12.00 WIB
        </p>
      </div>

      
      <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900">
        <div className="bg-red-900 text-white p-4 rounded-xl">
          📍
        </div>
        <p className="text-lg text-gray-700">
          Aula Gedung C
        </p>
      </div>

     
      <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border-r-8 border-red-900">
        <div className="bg-red-900 text-white p-4 rounded-xl">
          🏢
        </div>
        <p className="text-lg text-gray-700">
          Kampus 1 (Mataram) Universitas Harkat Negeri
        </p>
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