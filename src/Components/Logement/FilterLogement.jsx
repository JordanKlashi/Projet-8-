function FilterLogement({ tags, starsRepresentation, hostName, hostPicture }) {
  return (
    <>
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
    </>
  );
}

export default FilterLogement;
