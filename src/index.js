import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
// import Header from './Components/Header.js';
// import Banner from './Components/Banner.js';
// import App from './Components/App.js';
// // import Footer from './Footer.js';
// // import FicheLogements from './FicheLogement.js';
// import Apropos from './Components/Apropos.js';
// import Erreur from './Components/Erreur.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import Erreur from './Components/Erreur.js';
import Apropos from './Components/Apropos.js';
// import Survey from './Pages/survey.jsx'


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Apropos" element={<Apropos />} />
              <Route path="*" element={<Erreur />} />
          </Routes>
                </Router>
  </React.StrictMode>,
document.getElementById('root')
)