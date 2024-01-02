import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


import RotatingIcon from './RotatingIcon.jsx'

function Collapse({ title, content, isList = false }) {
  const [showContent, setShowContent] = useState(false);

  const handleIconClick = () => {
    setShowContent(!showContent);
  }

  return (
    <div className="Collapse">
      <h2 className="Collapse-Text">
        <span className="Collapse-Text_tit">{title}</span>
        <RotatingIcon icon={faChevronUp} onClick={handleIconClick} />
      </h2>
      {showContent && (
      <p className={`Collapse-Text_sub ${showContent ? 'show' : 'Notshow'}`}>
      {isList ? content.map((item, i) => <li key={i}>{item}</li>) : content}
    </p>
      )}
    </div>
  );
}

export default Collapse;
