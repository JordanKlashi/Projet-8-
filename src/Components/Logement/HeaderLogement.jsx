function HeaderLogement({ title, location, hostName, hostPicture }) {
  return (
    <>
    <div className="FicheLogements-Entete">
      <div className="FicheLogements-Titre">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </div>
    <div className="FicheLogements-Profil">
    <p className="FicheLogements-ProfilLoueur">{hostName}</p>
    <img
      className="FicheLogements-ProfilLoueur_Picture"
      alt={hostName}
      src={hostPicture}
    ></img>
    </div>
  </>
  );
}

export default HeaderLogement;
