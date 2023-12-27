import "../style/index.scss";
import generateStarRating from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import RotatingIcon from "./Animation";
import ArrowLeft from "../img/ArrowLeft.png"
import ArrowRight from "../img/ArrowRight.png"


const CardLogement = ({
  imgSource,
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
      <div className="FicheLogements-Carroussel">
      
      <img className="FicheLogements-Img" alt="logement" src={imgSource}></img>
      <div className="FicheLogements-Img_A">
      <img alt='fleche-gauche' className="FicheLogements-Img_A_L" src={ArrowLeft}></img>
      <img alt='fleche-droite' className="FicheLogements-Img_A_R"src={ArrowRight}></img>
      </div>
      </div>
      <div className="FicheLogements-Entete">
        <div className="FicheLogements-Titre">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <p className="FicheLogements-ProfilLoueur">{hostName}</p>
        <img
          className="FicheLogements-ProfilLoueur_Picture"
          alt={hostName}
          src={hostPicture}
        ></img>
      </div>
      <div className="FicheLogements-Filter">
        <div className="FicheLogements-Tag">
          {tags.map((tag, index) => (
            <span key={index} className="FicheLogements-Tag_txt">
              {tag}
            </span>
          ))}
        </div>

        <span className="FicheLogements-Star">{starsRepresentation}</span>
      </div>
      <div className="FicheLogements-Button">
        <div className="FicheLogements-Description">
          <p className="FicheLogements-Description_btn">
            <span>Description</span>
            <RotatingIcon
              icon={faChevronUp}
            />
          </p>
          <p className="FicheLogements-Description_txt">{description}</p>
        </div>
        <div className="FicheLogements-Equipements">
          <p className="FicheLogements-Equipements_btn">
            <span>Equipements</span>
            <FontAwesomeIcon
              className="FicheLogements-Font"
              icon={faChevronUp}
            />
          </p>
          <div className="FicheLogements-Equipements_txt">
            {equipement.map((equip, index) => (
              <p className="FicheLogements-Equipements_txt_span" key={index}>
                {equip}
              </p>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardLogement;
