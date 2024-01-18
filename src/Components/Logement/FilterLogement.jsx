function FilterLogement({ tags, starsRepresentation }) {
  return (
    <div className="FicheLogements-TagFilter">
      <div className="FicheLogements-Tag">
        {tags.map((tag, index) => (
          <span key={index} className="FicheLogements-Tag_txt">
            {tag}
          </span>
        ))}
      </div>
      <div className="FicheLogements-Filter">
        <span className="FicheLogements-Star">{starsRepresentation}</span>
      </div>
    </div>
  );
}

export default FilterLogement;
