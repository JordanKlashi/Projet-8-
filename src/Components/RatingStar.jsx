import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';

const generateStarRating = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;

  const stars = (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon className='FontStar-Full' key={index} icon={faStar} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon className='FontStar-Empty' key={`empty-${index}`} icon={faStar} />
      ))}
    </>
  );
  return stars;
};

export default generateStarRating;