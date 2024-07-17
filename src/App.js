// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Header from './components2/Header';
import ProductDetailPage from './components2/HomePage/ProductDetailPage';
import ContactFrom from './components2/pages/ContactForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactFrom />} />
      </Routes>
      {/* Aquí puedes añadir otros componentes o configuraciones globales */}
    </Router>
  );
}

export default App;
