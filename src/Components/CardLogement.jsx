import "../style/index.scss";
import generateStarRating from "./RatingStar";

import Carrousel from "./Carrousel";
import Collapse from "./Collpase";

const CardLogement = ({
  slides,
  title,
  description,
  equipement,
  tags,
  hostName,
  hostPicture,
  rating,
  location,
}) => {
  const starsRepresentation = generateStarRating(parseFloat(rating));

  return (
    <div className="FicheLogements">
      <Carrousel slides={slides} />
      <div className="FicheLogements-Entete">
        <div className="FicheLogements-Titre">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
      </div>
      <div className="FicheLogements-Tag">
        {tags.map((tag, index) => (
          <span key={index} className="FicheLogements-Tag_txt">
            {tag}
          </span>
        ))}
      </div>
      <div className="FicheLogements-Filter">
        <span className="FicheLogements-Star">{starsRepresentation}</span>
        <div className="FicheLogements-Profil">
          <p className="FicheLogements-ProfilLoueur">{hostName}</p>
          <img
            className="FicheLogements-ProfilLoueur_Picture"
            alt={hostName}
            src={hostPicture}
          ></img>
        </div>
      </div>

      <div className="FicheLogements-Button">
        <Collapse title={"Description"} content={description} />
        <Collapse title={"Equipements"} content={equipement} />
      </div>
    </div>
  );
};

export default CardLogement;
