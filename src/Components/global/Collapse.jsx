import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import RotatingIcon from "./RotatingIcon";

function Collapse({ title, content, isList = false }) {
  const [showContent, setShowContent] = useState(false);

  const handleIconClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="Collapse">
      <h2 className="Collapse-Text">
        <span className="Collapse-Text_tit">{title}</span>
        <RotatingIcon icon={faChevronUp} onClick={handleIconClick} />
      </h2>
      {showContent && (
        <div
          className={`Collapse-Text_sub ${showContent ? "show" : "Notshow"}`}
        >
          {isList ? (
            content.map((item, i) => (
              <p className="Collapse-Text_List" key={i}>
                {item}
              </p>
            ))
          ) : (
            <p className="Collapse-Text_IsnList">{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
