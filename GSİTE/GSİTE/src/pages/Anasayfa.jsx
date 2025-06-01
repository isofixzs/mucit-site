import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icatlarVerisi from "../data/icatlar.json";
import "../stlyes/Anasayfa.css";
import Search from "../components/Search";

function AnasayfaGenis() {
  // Arama terimi state'i
  const [searchTerm, setSearchTerm] = useState("");
  // Form alanları için state'ler
  const [isim, setIsim] = useState("");
  const [mucid, setMucid] = useState("");
  const [yil, setYil] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [tumIcatlar, setTumIcatlar] = useState([]);

  // İlk yüklemede JSON verisini state'e ata
  useEffect(() => {
    setTumIcatlar(icatlarVerisi);
  }, []);

  // Arama filtresi
  const filteredIcatlar = tumIcatlar.filter(ic =>
    ic.isim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Form gönderme işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    const yeniIcat = { id: Date.now(), isim, mucid, yil, aciklama };
    const guncelIcatlar = [...tumIcatlar, yeniIcat];
    setTumIcatlar(guncelIcatlar);
    setMesaj("İcat öneriniz başarıyla kaydedildi!");

    // Formu temizle
    setIsim("");
    setMucid("");
    setYil("");
    setAciklama("");

    // Mesajı 3 saniye sonra temizle
    setTimeout(() => setMesaj(""), 3000);
  };

  return (
    <div className="tam-genis-anasayfa">
      <header className="anasayfa-header">
        <h1 className="anasayfa-title">⚛︎ İcatlar Arşivi</h1>
        <div className="ust-butons">
          <Link to="/hakkinda" className="nav-link">
            <button className="nav-button">Hakkında</button>
          </Link>
          <Link to="/mucitler" className="nav-link">
            <button className="nav-button">Mucitler</button>
          </Link>
        </div>
      </header>

      {/* Search bileşeni */}
      <Search
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="İcatlarda ara…"
      />

      <section className="icatlar-alani">
        {tumIcatlar.length === 0 ? (
          <p className="bilgi">Henüz hiç icat eklenmemiş.</p>
        ) : filteredIcatlar.length > 0 ? (
          <div className="icat-grid">
            {filteredIcatlar.sort((a, b) => b.yil - a.yil).map((icat) => (
              <div key={icat.id} className="icat-kart">
                <h3>{icat.isim}</h3>
                <p><strong>Mucid:</strong> {icat.mucid}</p>
                <p><strong>Yıl:</strong> {icat.yil}</p>
                <p className="aciklama">
                  {icat.aciklama || 
                    "Bu icat, insanlık tarihindeki önemli gelişmeleri hızlandıran bir adımdır."
                  }
                </p>
                <Link to={`/icat/${icat.id}`} className="detay-link">
                  Detaylar
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="bilgi">"{searchTerm}" ile eşleşen sonuç bulunamadı.</p>
        )}
      </section>

      <section className="form-alani">
        <h2 className="form-baslik">⚙️ Yeni Bir İcat Ekle</h2>
        <form onSubmit={handleSubmit} className="icat-form">
          <input
            type="text"
            placeholder="İcat İsmi"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Mucid"
            value={mucid}
            onChange={(e) => setMucid(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Yıl"
            value={yil}
            onChange={(e) => setYil(e.target.value)}
            required
          />
          <textarea
            placeholder="Açıklama"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
            required
          />
          <button type="submit">Öneriyi Gönder</button>
        </form>
        {mesaj && <div className="mesaj-kutusu">{mesaj}</div>}
      </section>
    </div>
  );
}

export default AnasayfaGenis;
