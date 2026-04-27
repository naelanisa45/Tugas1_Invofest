import Button from "../components/Button";
import { Collapse } from "../components/Collapse";


export default function Beranda() {

  const collapseItems = [
    {
      title: "Apa itu Invofest",
      deskripsi:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan",
      deskripsi:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      deskripsi:
        "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
        title: "Bagaimana saya mengetahui pemenang kompetisi?",
        deskripsi:
            "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
        title: "Apa yang didapat pemenang dalam kompetisi?",
        deskripsi:
            "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
        title: "Bagaimana cara mendaftar event?",
        deskripsi: 
            "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti."
    }
  ];

    return (
        <div className="max-w-7xl mx-auto">
          <section
                  id="hero"
                  className="py-10 flex gap-10 justify-between items-center">
              <div className="flex justify-center items-center gap-6">
                {/* kiri */}
                <div className="flex-1 space-y-6 pl-6 md:pl-12">
                  <img
                    src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                    alt=""
                    className="w-75"
                    />
        
                    <p className="text-gray-600 leading-loose">
                      Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema 
                      <span className="font-bold">
                        “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”.
                      </span>
                    </p>
        
                    <div className="flex gap-4">
                <Button title="Info Selengkapnya" />
                <Button title="Hubungi Panitia" />
              </div>
            </div>
          </div>
        
              {/* //kanan */}
              <div>
                <img
                  src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                  alt=""
                  />
                </div>
                </section>

        <section className="bg-red-100 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">

            <h1 className="text-5xl font-medium text-red-900">
              Tentang INVOFEST
            </h1>

            <p className="text-gray-700 leading-loose">
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema
              <span className="font-bold">
                “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.
              </span>
              Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

              <div className="bg-white p-6 rounded-xl shadow-lg  border border-gray-100 relative">
                <div className="absolute right-0 top-0 h-full w-2 bg-red-900 rounded-r-xl"></div>
                <h3 className="text-xl font-bold text-red-900 mb-2">IT Seminar</h3>
                <p className="text-gray-600 text-sm mb-4 leading-loose">
                  Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.
                </p>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit ">
                  INFO SELENGKAPNYA
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="absolute right-0 top-0 h-full w-2 bg-red-900 rounded-r-xl"></div>
                <h3 className="text-xl font-bold text-red-900 mb-2">IT Talkshow</h3>
                <p className="text-gray-600 text-sm mb-4 leading-loose">
                  Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.
                </p>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                  INFO SELENGKAPNYA
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-gray-100 relative">
                <div className="absolute right-0 top-0 h-full w-2 bg-red-900 rounded-r-xl"></div>
                <h3 className="text-xl font-bold text-red-900 mb-2">IT Competition</h3>
                <p className="text-gray-600 text-sm mb-4 leading-loose">
                  Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                </p>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                  INFO SELENGKAPNYA
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-gray-100 relative">
                <div className="absolute right-0 top-0 h-full w-2 bg-red-900 rounded-r-xl"></div>
                <h3 className="text-xl font-bold text-red-900 mb-2">IT worskhop</h3>
                <p className="text-gray-600 text-sm mb-4 leading-loose">
                  Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.
                </p>
                <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                  INFO SELENGKAPNYA
                </button>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl font-Medium text-red-900">
            IT Seminar
          </h2>

          <p className="text-gray-700 leading-loose">
            Seminar Nasional Teknologi Informasi ini mengangkat tema
            <span className="font-semibold">
              "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”
            </span>
            Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
          </p>

          <div>
            <Button title="DAFTAR IT SEMINAR" />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="maskot"
            className="w-80 lg:w-96"
          />
          </div>
      </section>

      <section className="bg-red-100 py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="maskot"
            className="w-80 lg:w-96"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl font-medium text-red-900">
            IT TALKSHOW
          </h2>

          <p className="text-gray-700 leading-loose">
            Talkshow berskala nasional:
            <span className="font">
               “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.”
            </span>
            Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
          </p>

          <div>
            <Button title="DAFTAR IT TALKSHOW"  />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl font-medium text-red-900">
            IT Workshop
          </h2>

          <p className="text-gray-700 leading-loose">
            Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
            <span className="font-semibold">
              ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
            </span>
            Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>

          <div>
            <Button title="DAFTAR IT WORKSHOP" />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt="maskot"
            className="w-80 lg:w-96"
          />
          </div>
      </section>

      <section className="bg-red-100 py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="maskot"
            className="w-80 lg:w-96"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl font-medium text-red-900">
            IT Competition
          </h2>

          <p className="text-gray-700 leading-loose">
            "From Creation to Innovation"
            <span className="font">
               adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata.
            </span>
              Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
          </p>

          <div>
            <Button title="DAFTAR IT COMPETITION"  />
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

      

        
        <div>
           
    

        </div>
        </div>
    );
}