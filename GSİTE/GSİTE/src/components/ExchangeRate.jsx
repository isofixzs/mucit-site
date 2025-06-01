import React, { useState, useEffect } from 'react';

export default function ExchangeRate() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        // Frankfurter.app endpoint örneği: USD bazlı, EUR ve TRY kurları
        const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR,TRY');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // data.rates: { EUR: 0.92..., TRY: 27.xx }
        setRates(data.rates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRates();
  }, []);

  if (loading) return <p>Yükleniyor…</p>;
  if (error)   return <p className="error">Hata: {error}</p>;

  return (
    <div className="exchange-rate">
      <h2>Döviz Kurları (USD bazlı)</h2>
      <ul>
        {Object.entries(rates).map(([code, rate]) => (
          <li key={code}>
            <strong>{code}</strong>: {rate.toFixed(4)}
          </li>
        ))}
      </ul>
    </div>
  );
}
