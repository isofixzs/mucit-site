import React, { useState, useEffect } from 'react'; // React bileşeni oluşturmak, durum (state) yönetmek ve etkiler (effect) tanımlamak
import { useParams, useNavigate } from 'react-router-dom'; // 
import icatlarVerisi from '../data/icatlar.json'; // 	İcat verilerini JSON dosyasından içe aktarır
import '../stlyes/DetaySayfasi.css';

function DetaySayfasi() {
  const { id } = useParams(); //  URL'deki parametreyi alıp, bunu bileşen içinde kullanabilmemizi sağlar.
  const [icat, setIcat] = useState(null);
  const navigate = useNavigate();  // Kullanıcıyı programlı olarak başka bir sayfaya yönlendirmek için kullanılır.Örneğin bir butona tıkladıktan sonra /anasayfa'ya gitmek istiyorsan

  useEffect(() => { // useEffect, URL'deki id parametresine göre icatlarVerisi içinde ilgili icadı arar.
    
      const bulunanIcat = icatlarVerisi.find((item) => item.id === parseInt(id)); 


    if (bulunanIcat) {
      setIcat(bulunanIcat);
    }
  }, [id]);

 
  if (!icat) {  // navigate(-1): Kullanıcı "Geri Dön" butonuna tıkladığında, önceki sayfaya dönülmesini sağlar. // !icat yani eğer icat yoksa diyor.(yok(not) operatörü)
    return (
      <div className="detay-sayfasi-container">
        <h2>Bu icat bulunamadı.</h2>
        <button onClick={() => navigate(-1)} className="geri-button">Geri Dön</button> 
      </div>
    );
  }

  return (
    <div className="detay-sayfasi-container">
      <h1 className="detay-title">{icat.isim}</h1>
      <p><strong>Açıklama:</strong> {icat.detayAciklama}</p>
      <p><strong>Gelişim Süreci:</strong> {icat.detayGelisimSüreci}</p>
      <p><strong>Uygulama Alanları:</strong> {icat.detayUygulamaAlani}</p>
      <p><strong>Teknolojik Özellikler:</strong> {icat.detayTeknolojikÖzellik}</p>
      <p><strong>İlgi Çekici Bilgi:</strong> {icat.detayIlgiCekiciBilgi}</p>
      <p><strong>Tarihi Bağlam:</strong> {icat.detayTarihiBaglam}</p>
      <p><strong>Sosyal Etkiler:</strong> {icat.detaySosyalEtkiler}</p>
      <p><strong>İlginç Faktör:</strong> {icat.detayIlginçFaktor}</p>
      <p><strong>Ticarileşme:</strong> {icat.detayTicarilesme}</p>
      <div className="detay-footer">
        <button onClick={() => navigate(-1)} className="geri-button">Geri Dön</button>
      </div>
    </div>
  );
}

export default DetaySayfasi;
