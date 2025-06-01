import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import DetaySayfasi from './pages/DetaySayfasi';
import Hakkinda from './pages/Hakkinda';
import Mucitler from './pages/Mucitler';
import ExchangeRate from './components/ExchangeRate';


const navbarStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '0.75rem 1.5rem',
  borderBottom: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
};

const navListStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginLeft: '1rem',
};

const linkStyle = {
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#333333',
  textDecoration: 'none',
  padding: '0.5rem 0',
  transition: 'color 0.2s ease, borderBottom 0.2s ease',
};

const activeLinkStyle = {
  ...linkStyle,
  color: '#0070f3',
  borderBottom: '2px solid #0070f3',
};

function App() {
  return (
    <>
      <header>
        <nav style={navbarStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <NavLink
                to="/doviz"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
                Döviz Kurları
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/icat/:id" element={<DetaySayfasi />} />
        <Route path="/hakkinda" element={<Hakkinda />} />
        <Route path="/mucitler" element={<Mucitler />} />
        <Route path="/doviz" element={<ExchangeRate />} />
      </Routes>
    </>
  );
}

export default App;
