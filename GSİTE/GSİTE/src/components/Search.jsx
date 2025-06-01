import React from 'react';
import '../Stlyes/Search.css';

export default function Search({ value, onChange, placeholder = 'Ara…' }) {
  return (
    <div className="search mb-4">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}
