import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'; // Adjust the path to where your Navbar component is located

import HomePage from './pages/home';
import ContactForm from './pages/form';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Add the Navbar component to the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ContactForm />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/work" element={<div>Work Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
