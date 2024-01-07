import ErreurImg from "../img/404.png";

import { Link } from "react-router-dom";

function Erreur() {
  return (
    <main>
      <div className="Erreur">
        <img className="Erreur-Img" src={ErreurImg} alt="Erreur404"></img>
        <p className="Erreur-Txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="Erreur-Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default Erreur;
