import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotatingIcon = ({ icon, onClick }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
    onClick();
  };
  return (
    <span onClick={handleIconClick}>
      <FontAwesomeIcon
        icon={icon}
        className={isRotated ? "rotated" : "norotated"}
      />
    </span>
  );
};

export default RotatingIcon;
