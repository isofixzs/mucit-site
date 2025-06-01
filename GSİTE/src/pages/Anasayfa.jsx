import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icatlarVerisi from "../data/icatlar.json";
import "../stlyes/Anasayfa.css";

function AnasayfaGenis() {
  const [isim, setIsim] = useState(""); 
  const [mucid, setMucid] = useState(""); 
  const [yil, setYil] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [mesaj, setMesaj] = useState(""); 
  const [tumIcatlar, setTumIcatlar] = useState([]);

  useEffect(() => { 
    setTumIcatlar(icatlarVerisi);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const yeniIcat = { id: Date.now(), isim, mucid, yil, aciklama }; 
    const guncelIcatlar = [...tumIcatlar, yeniIcat]; 
    setTumIcatlar(guncelIcatlar);
    setMesaj("İcat öneriniz başarıyla kaydedildi!");
    setIsim(""); setMucid(""); setYil(""); setAciklama(""); 
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
 
      <section className="icatlar-alani">   
        {tumIcatlar.length === 0 ? (
          <p className="bilgi">Henüz hiç icat eklenmemiş.</p> 
        ) : (
          <div className="icat-grid">  
            {tumIcatlar.sort((a, b) => b.yil - a.yil).map((icat) => (
              <div key={icat.id} className="icat-kart"> 
                <h3>{icat.isim}</h3>
                <p><strong>Mucid:</strong> {icat.mucid}</p>
                <p><strong>Yıl:</strong> {icat.yil}</p>
                <p className="aciklama">{icat.aciklama || "Bu icat, insanlık tarihindeki önemli gelişmeleri hızlandıran bir adımdır."}</p>
                <Link to={`/icat/${icat.id}`} className="detay-link">Detaylar</Link>
              </div>
            ))}
          </div>
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
