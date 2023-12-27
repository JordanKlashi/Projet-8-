import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RotatingIcon = ({ icon }) => {
    const [isRotated, setIsRotated] = useState(false);

  
    const handleIconClick = () => {
      setIsRotated(!isRotated);


    };
  return (
    <span onClick={handleIconClick}>
      <FontAwesomeIcon
        icon={icon}
        className={isRotated ? 'rotated' : ''}
      />
    </span>
  );
};

export default RotatingIcon;