import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Banner from "../Components/Banner.jsx";

function Apropos() {
  return (
    <div>
      <Banner />
      <ul className="Apropos-Liste">
        <li className="Apropos-Liste-Text">
          <span className="Apropos-Liste-Text_tit">Fiabilité</span>
          <FontAwesomeIcon className="Apropos-Font" icon={faChevronUp} />
        </li>
        <p className="Apropos-Liste-Text_sub">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
        <li className="Apropos-Liste-Text">
          <span className="Apropos-Liste-Text_tit">Respect</span>
          <FontAwesomeIcon className="Apropos-Font" icon={faChevronUp} />
        </li>
        <p className="Apropos-Liste-Text_sub">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <li className="Apropos-Liste-Text">
          <span className="Apropos-Liste-Text_tit">Service</span>
          <FontAwesomeIcon className="Apropos-Font" icon={faChevronUp} />
        </li>
        <p className="Apropos-Liste-Text_sub">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <li className="Apropos-Liste-Text">
          <span className="Apropos-Liste-Text_tit">Sécurité</span>
          <FontAwesomeIcon className="Apropos-Font" icon={faChevronUp} />
        </li>
        <p className="Apropos-Liste-Text_sub">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </ul>
    </div>
  );
}

export default Apropos;
