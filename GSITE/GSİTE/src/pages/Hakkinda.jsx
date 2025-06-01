import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stlyes/Hakkinda.css";

function Hakkinda() {
  const getBegeni = (key) => Number(localStorage.getItem(key)) || 0;

  const [begeni1, setBegeni1] = useState(getBegeni("begeni1"));
  const [begeni2, setBegeni2] = useState(getBegeni("begeni2"));
  const [begeni3, setBegeni3] = useState(getBegeni("begeni3"));
  const [begeni4, setBegeni4] = useState(getBegeni("begeni4"));
  const [begeni5, setBegeni5] = useState(getBegeni("begeni5"));
  const [begeni6, setBegeni6] = useState(getBegeni("begeni6"));
  const [begeni7, setBegeni7] = useState(getBegeni("begeni7"));

  useEffect(() => {
    localStorage.setItem("begeni1", begeni1);
    localStorage.setItem("begeni2", begeni2);
    localStorage.setItem("begeni3", begeni3);
    localStorage.setItem("begeni4", begeni4);
    localStorage.setItem("begeni5", begeni5);
    localStorage.setItem("begeni6", begeni6);
    localStorage.setItem("begeni7", begeni7);
  }, [begeni1, begeni2, begeni3, begeni4, begeni5, begeni6, begeni7]);

  return (
    <section className="hakkinda-container">
      <header className="hakkinda-header">
        <h1 className="hakkinda-title">🙋🏻‍♂️HAKKIMIZDA</h1>
        <p className="hakkinda-subtitle">
          "𝓣𝓮𝓴 𝓐𝓶𝓪𝓬ı𝓶ı𝔃 𝓑𝓲𝓵𝓲𝓶𝓮 𝓓𝓮𝓼𝓽𝓮𝓴"
        </p>

        <div className="ust-butons">
          <Link to="/" className="nav-link">
            <button className="nav-button">Anasayfa</button>
          </Link>
          <Link to="/mucitler" className="nav-link">
            <button className="nav-button">Mucitler</button>
          </Link>
        </div>
      </header>

      <div className="hakkinda-content">
        <div className="hakkinda-card">
          <h2>🌐 Misyonumuz</h2>
          <p><strong>İcatlar Arşivi</strong>, tarihe yön veren icatları derleyerek merak uyandıran, eğitici ve ilham verici bir kaynak sunar.</p>
          <p>Geçmişi öğrenirken, geleceğe yön vermek isteyenler için açık, şeffaf ve katılımcı bir platformuz.</p>
          <button className="begeni-dugmesi" onClick={() => setBegeni1(begeni1 + 1)}>👍 Faydalı Buldum ({begeni1})</button>
        </div>

        <div className="hakkinda-card">
          <h2>🫵 Hedeflerimiz</h2>
          <ul>
            <li>Toplumu teknoloji ve inovasyon konusunda bilinçlendirmek</li>
            <li>Genç mucitleri teşvik ederek fikirlerini görünür kılmak</li>
            <li>Her yaştan kullanıcıya erişilebilir bir kaynak sunmak</li>
            <li>İcatlara dair bilgileri birleştirerek kolayca erişilebilir hale getirmek</li>
          </ul>
          <button className="begeni-dugmesi" onClick={() => setBegeni2(begeni2 + 1)}>👍 Faydalı Buldum ({begeni2})</button>
        </div>

        <div className="hakkinda-card">
          <h2>🔧 Teknik Altyapı</h2>
          <ul>
            <li>%100 Güvenilir bir altyapı</li>
            <li>2 adımlı doğrulama seçeneği</li>
            <li>Kullanıcı ile etkileşim</li>
            <li>Responsive (mobil uyumlu) tasarım</li>
            <li>Formlarla kullanıcı katkısı</li>
            <li>Modern API kullanımı</li>
          </ul>
          <button className="begeni-dugmesi" onClick={() => setBegeni3(begeni3 + 1)}>👍 Faydalı Buldum ({begeni3})</button>
        </div>

        <div className="hakkinda-card">
          <h2>👨🏻‍💻 Katkılarınızla Büyüyoruz</h2>
          <p>Siz de sitemize yeni icatlar ekleyerek katkı sağlayabilirsiniz. Editörlerimiz önerileri onayladıktan sonra yayınlanır.</p>
          <p>Yakında eklenecek oylama, yorum ve sıralama sistemleriyle katkılarınız daha görünür olacak.</p>
          <button className="begeni-dugmesi" onClick={() => setBegeni4(begeni4 + 1)}>👍 Faydalı Buldum ({begeni4})</button>
        </div>

        <div className="hakkinda-card">
          <h2>֎ Gelecek Vizyonumuz</h2>
          <p>Bilime olan merakı artırmak ve uluslararası bir platform olmak.</p>
          <p>Eğlenceli tasarımlarla bilimi her yaş grubuna sevdirmek.</p>
          <p>Ülkemizdeki bilimsel çalışmaları görünür kılmak.</p>
          <button className="begeni-dugmesi" onClick={() => setBegeni5(begeni5 + 1)}>👍 Faydalı Buldum ({begeni5})</button>
        </div>

        <div className="hakkinda-card">
          <h2>🪪 Topluluk Yönetimi</h2>
          <p>Saygı ve sevgi temelli iletişim esas alınır. Şikayet, öneri ve dilekler için destek sistemi bulunur.</p>
          <p>7/24 destek ile kullanıcıların yaşadığı tüm sorunlar çözülür.</p>
          <button className="begeni-dugmesi" onClick={() => setBegeni6(begeni6 + 1)}>👍 Faydalı Buldum ({begeni6})</button>
        </div>

        <div className="hakkinda-card">
          <h2>🛡️ Güvenlik & Gizlilik</h2>
          <p>Kullanıcı verileri şifreli bağlantılarla korunur. GDPR ve KVKK uyumu sağlanır.</p>
          <p>Bilgi girişlerinde 👤keylocker koruması ile bilgileriniz güvende!</p>
          <button className="begeni-dugmesi" onClick={() => setBegeni7(begeni7 + 1)}>👍 Faydalı Buldum ({begeni7})</button>
        </div>
      </div>

      <footer className="hakkinda-alt">
        <p>“Buluş, bir şeyin ne olduğuna dair hayal gücünü özgür bırakmaktır.” — Nikola Tesla</p>
      </footer>
    </section>
  );
}

export default Hakkinda;
