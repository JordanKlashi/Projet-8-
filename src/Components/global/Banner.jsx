function Banner({ imgUrl, title = "" }) {
  return (
    <div className="Banner">
      <img className="Banner-Logo" src={imgUrl} alt="Bannière d'acceuil"></img>
      {title !== "" && <h1 className="Banner-Text">{title}</h1>}
    </div>
  );
}

export default Banner;
