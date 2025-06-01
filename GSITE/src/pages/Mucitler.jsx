import React from "react";
import { Link } from "react-router-dom";
import "../stlyes/Mucitler.css"; // CSS'yi buraya import etmeyi unutma

function Mucitler() {
  const mucitlerListesi = [
    {
      id: 1,
      isim: "Nikola Tesla",
      ulke: "Sırbistan / ABD",
      alan: "Elektrik ve Manyetizma",
      aciklama: "Alternatif akım sistemleri ve kablosuz iletişim üzerine çalışmalarıyla tanınır.",
    },
    {
      id: 2,
      isim: "Thomas Edison",
      ulke: "ABD",
      alan: "Elektrik, Işıklandırma",
      aciklama: "Ampul, fonograf ve elektrik dağıtımı üzerine yaptığı çalışmalarla bilinir.",
    },
    {
      id: 3,
      isim: "Marie Curie",
      ulke: "Polonya / Fransa",
      alan: "Radyasyon, Kimya",
      aciklama: "Radyoaktivite üzerine yaptığı araştırmalarla iki Nobel ödülü kazanmıştır.",
    },
    {
      id: 4,
      isim: "Leonardo da Vinci",
      ulke: "İtalya",
      alan: "Mühendislik, Sanat",
      aciklama: "Hem bilim hem sanat alanında çok yönlü çalışmalarıyla tanınır.",
    },
    {
      id: 5,
      isim: "Alexander Graham Bell",
      ulke: "İskoçya / ABD",
      alan: "İletişim Teknolojileri",
      aciklama: "Telefonun icadıyla iletişimde devrim yaratmıştır.",
    },
    {
      id: 6,
      isim: "Isaac Newton",
      ulke: "İngiltere",
      alan: "Fizik, Matematik",
      aciklama: "Yerçekimi kanunu ve klasik mekanik üzerine çalışmalarıyla modern bilimin kurucularındandır.",
    },
    {
      id: 7,
      isim: "Galileo Galilei",
      ulke: "İtalya",
      alan: "Astronomi, Fizik",
      aciklama: "Teleskobun geliştirilmesi ve modern gözlemsel astronominin temellerini atmıştır.",
    },
    {
      id: 8,
      isim: "Ada Lovelace",
      ulke: "İngiltere",
      alan: "Bilgisayar Bilimi",
      aciklama: "Tarihin ilk bilgisayar programcısı olarak kabul edilir.",
    },
    {
      id: 9,
      isim: "James Watt",
      ulke: "İskoçya",
      alan: "Makine Mühendisliği",
      aciklama: "Buhar makinesinin verimliliğini artırarak Sanayi Devrimi'ni başlatmıştır.",
    },
    {
      id: 10,
      isim: "Alan Turing",
      ulke: "İngiltere",
      alan: "Bilgisayar Bilimi",
      aciklama: "Modern bilgisayarların temellerini atan matematikçi ve kriptoloji uzmanı.",
    },
    {
      id: 11,
      isim: "Benjamin Franklin",
      ulke: "ABD",
      alan: "Elektrik, Bilim",
      aciklama: "Elektriksel deneyleri ve paratoner icadıyla tanınır.",
    },
    {
      id: 12,
      isim: "Wright Kardeşler",
      ulke: "ABD",
      alan: "Havacılık",
      aciklama: "İlk motorlu uçakla kontrollü uçuşu gerçekleştiren havacılık öncüleri.",
    },
    {
      id: 13,
      isim: "Johannes Gutenberg",
      ulke: "Almanya",
      alan: "Matbaa Teknolojisi",
      aciklama: "Modern matbaanın mucidi olarak bilinir, bilgi çağını başlatmıştır.",
    },
    {
      id: 14,
      isim: "Guglielmo Marconi",
      ulke: "İtalya",
      alan: "Kablosuz İletişim",
      aciklama: "Radyonun icadıyla kablosuz iletişimin öncüsü olmuştur.",
    }
  ];

  return (
    <div className="mucitler-sayfa">
      <header className="mucitler-baslik">
        <h1>👨‍🔬 Ünlü Mucitler</h1>
        <div className="mucitler-linkler">
          <Link to="/"><button>Anasayfa</button></Link>
          <Link to="/hakkinda"><button>Hakkında</button></Link>
        </div>
      </header>

      <section className="mucitler-grid-alani">
        <div id="mucitler-grid">
          {mucitlerListesi.map((mucit) => (
            <div key={mucit.id} className="mucit-kart">
              <h3>{mucit.isim}</h3>
              <p><strong>Ülke:</strong> {mucit.ulke}</p>
              <p><strong>Alan:</strong> {mucit.alan}</p>
              <p>{mucit.aciklama}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mucitler;
