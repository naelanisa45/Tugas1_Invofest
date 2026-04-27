import './App.css';
import Button from "./components/Button";
import Header from "./components/Header";
import { Collapse } from "./components/Collapse";
import { SpeakerCard } from "./components/SpeakerCard";
import { Card } from "./components/Card";


function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest",
      deskripsi:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”."
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan",
      deskripsi:
        "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest",
      deskripsi:
        "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      deskripsi:
        "Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.",
    },
    {
      title: "IT Talkshow",
      deskripsi:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      deskripsi:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      deskripsi:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];


  return (
    <>
      <Header />

      <div className="container mx-auto">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        {/* kiri */}
        <div className="flex flex-col gap-3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            />

            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.
            </p>

            <div className="flex gap-4">
        <Button title="Info Selengkapnya" variant="primary" />
        <Button title="Hubungi Panitia" variant="outline" />
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

        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
            {cardItems.map((item, index) =>(
              <Card key={index} className="w-full">
                <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
                <p>{item.deskripsi}</p>
                <Button
                  title="Info Selengkapnya"
                  variant="primary"
                  className="mt-4"
                  />
              </Card>
            ))}
            </section>

            <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
              {collapseItems.map((item, index) => (
                <Collapse
                  key={index}
                  title={item.title}
                  deskripsi={item.deskripsi}
                  />
              ))}
            </section>
      </div>
      
      </>
);
}
      
export default App;
