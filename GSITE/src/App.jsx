import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';  
import DetaySayfasi from './pages/DetaySayfasi'; 
import Hakkinda from './pages/Hakkinda';  
import Mucitler from './pages/Mucitler'; 

function App() {
  return (
    <Routes>  
      <Route path="/" element={<Anasayfa />} />
      <Route path="/icat/:id" element={<DetaySayfasi />} />
      <Route path="/hakkinda" element={<Hakkinda />} />
      <Route path="/mucitler" element={<Mucitler />} /> 
    </Routes> 
  );
}

export default App;


