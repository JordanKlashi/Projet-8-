import FicheLogement from "../main/FicheLogement";
import Erreur from "../../Pages/Erreur";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Logement = () => {
  const [Logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/data/logements.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Problème lors du chargement des logements');
        }
        return response.json();
      })
      .then(data => {
        setLogements(data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des logements : ', error);
      });
  }, []);
  const { id } = useParams();

  const logement = Logements.find((log) => log.id === id);

  return (
    <>
      {logement ? (
        <FicheLogement
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
      ) : (
        <Erreur />
      )}
    </>
  );
};

export default Logement;
