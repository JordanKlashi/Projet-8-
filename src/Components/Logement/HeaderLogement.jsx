function HeaderLogement({ title, location }) {
  return (
    <div className="FicheLogements-Entete">
      <div className="FicheLogements-Titre">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default HeaderLogement;
