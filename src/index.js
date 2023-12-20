import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Header from './Components/Header.js';
import Banner from './Components/Banner.js';
// import App from './App';
// import Footer from './Footer.js';
// import FicheLogements from './FicheLogement.js';
import Apropos from './Components/Apropos.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Apropos />
    
    {/* <FicheLogements /> */}
    {/* 
    <App /><Footer /> */}
  </React.StrictMode>
);
