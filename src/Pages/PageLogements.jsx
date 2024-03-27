import React, { useState, useEffect } from "react";
import Erreur from "../Pages/Erreur";
import { useParams } from "react-router-dom";
import generateStarRating from "../Components/Logement/RatingStar";
import Carrousel from "../Components/Logement/Carrousel";
import Collapse from "../Components/global/Collapse";
import HeaderLogement from "../Components/Logement//HeaderLogement";
import FilterLogement from "../Components/Logement//FilterLogement";

const Logements = () => {
  const [currentlogement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("../data/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problème lors du chargement des logements");
        }
        return response.json();
      })
      .then((data) => {
        setLogement(data.find((log) => log.id === id));
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des logements : ", error);
      });
  }, [id]);

  const starsRepresentation = currentlogement
    ? generateStarRating(parseFloat(currentlogement.rating))
    : null;

  return (
    <main>
      {currentlogement ? (
        <div className="FicheLogements">
          <Carrousel slides={currentlogement.pictures} />
          <HeaderLogement
            title={currentlogement.title}
            location={currentlogement.location}
            hostName={currentlogement.host.name}
            hostPicture={currentlogement.host.picture}
          />
          <FilterLogement
            tags={currentlogement.tags}
            starsRepresentation={starsRepresentation}
          />
          <div className="FicheLogements-Button">
            <Collapse
              title={"Description"}
              content={currentlogement.description}
            />
            <Collapse
              title={"Equipements"}
              content={currentlogement.equipments}
              isList={true}
            />
          </div>
        </div>
      ) : (
        <Erreur />
      )}
    </main>
  );
};

export default Logements;
