import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import Home from './Pages/Home.jsx'
import Apropos from './Pages/Apropos.jsx'
import Erreur from './Pages/Erreur.jsx'
import Logements from './Components/GallerieLogement.jsx'



ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Apropos" element={<Apropos />} />
              <Route path="*" element={<Erreur />} />
              <Route path="/Logements/c67ab8a7" element={<Logements />} />
          </Routes>
          <Footer />
        </Router>

  </React.StrictMode>,
document.getElementById('root')
)