import CardLogement from "./CardLogement";
import Logements from "../logements.json";
import { useParams } from "react-router-dom";

const GallerieLogement = () => {
  const { id } = useParams();

  const logement = Logements.find((log) => log.id === id);

  return (
    logement && (
      <CardLogement
        slides={logement.pictures}
        title={logement.title}
        id={logement.id}
        location={logement.location}
        description={logement.description}
        equipement={logement.equipments}
        tags={logement.tags}
        hostName={logement.host.name}
        hostPicture={logement.host.picture}
        rating={logement.rating}
      />
    )
  );
};

export default GallerieLogement;
