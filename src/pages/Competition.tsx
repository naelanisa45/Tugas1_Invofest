import Button from "../components/Button"
import { Collapse } from "../components/Collapse";

export default function Competition() {

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
                          <h1 className="text-4xl md:text-5xl font-medium text-red-900">
                            IT Competition
                          </h1>

                          <p className="text-3xl font-medium text-red-900">
                            "From Creation to Innovation"
                          </p>
                
                            <p className= "text-gray-700 leading-loose">
                              Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”, Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                            </p>
                
                            <div className="flex gap-4">
                        <Button title="Info Selengkapnya"  />
                        <Button title="Hubungi Panitia"  />
                      </div>
                    </div>
                  </div>
                
                      {/* //kanan */}
                      <div>
                        <img
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                          alt=""
                          />
                        </div>
                        </section>

            <section className="bg-red-100 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col text-center gap-6">

            <h1 className="text-5xl font-medium text-red-900 text-center mb-4">
              DESKRIPSI KOMPETISI
            </h1>

            <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-loose">
              Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics Vocational Festival) 2025 adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition.
              <span className="font-semibold">
                Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. 
              </span>
                Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
            </p>
            </div>
        </div>
    </section>

    <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

            <h1 className="text-5xl font-medium text-red-900 mb-4">
                DAFTAR KOMPETISI
            </h1>

            <p className="text-gray-600 mb-12">
                Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"
                        alt="Poster Design Competition"
                        className="w-full h-full object-cover"
                    />

                    <div className="p-4 flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gray-600">
                            Poster Design Competition
                        </h3>

                        <p className="text-gray-700 text-sm text-justify leading-relaxed">
                            Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.
                        </p>

                        <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                            INFO SELENGKAPNYA
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"
                        alt="UI/UX Design"
                        className="w-full h-full object-cover"
                    />

                    <div className="p-4 flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gray-600">
                            UI/UX Design
                        </h3>

                        <p className="text-gray-700 text-sm text-justify leading-relaxed">
                            UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.
                        </p>

                        <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                            INFO SELENGKAPNYA
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"
                        alt="Web Design Competition"
                        className="w-full h-full object-cover"
                    />

                    <div className="p-4 flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gray-600">
                            Web Design Competition
                        </h3>

                        <p className="text-gray-700 text-sm text-justify leading-relaxed">
                            Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.
                        </p>

                        <button className="bg-red-900 text-white px-4 py-2 rounded-lg mt-2 w-fit">
                            INFO SELENGKAPNYA
                        </button>
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