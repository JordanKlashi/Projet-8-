import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Header from './Header.js';
// import Banner from './Banner.js';
// import App from './App';
// import Footer from './Footer.js';
import FicheLogements from './FicheLogement.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FicheLogements />
    {/* <Banner />
    <App /><Footer /> */}
  </React.StrictMode>
);
