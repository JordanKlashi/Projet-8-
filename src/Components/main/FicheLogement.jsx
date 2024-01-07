import generateStarRating from "../animation/RatingStar";

import Carrousel from "../animation/Carrousel";
import Collapse from "../animation/Collapse";
import HeaderLogement from "./HeaderLogement";
import FilterLogement from "./FilterLogement";

const FicheLogement = ({
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
      <HeaderLogement title={title} location={location} />
      <FilterLogement
        tags={tags}
        starsRepresentation={starsRepresentation}
        hostName={hostName}
        hostPicture={hostPicture}
      />
      <div className="FicheLogements-Button">
        <Collapse title={"Description"} content={description} />
        <Collapse title={"Equipements"} content={equipement} isList={true} />
      </div>
    </div>
  );
};

export default FicheLogement;
