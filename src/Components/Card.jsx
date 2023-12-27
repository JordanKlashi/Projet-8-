import '../style/index.scss';
import { NavLink } from 'react-router-dom';


const Card = ({imgSource,title,id}) => {
    
  return (
    

        <div className='Hebergements-Carte'>
<NavLink to={/Logements/ + id}>
          <img 
            
            className='Hebergements-Img'
            src={imgSource}
            alt={title}
          />

          <p className='Hebergements-Titre'>{title}</p>
          </NavLink>
        </div>
    
  );
};

export default Card;
