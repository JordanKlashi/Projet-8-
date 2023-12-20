import './style/app.scss';
import Logements from '../logements.json';
// import { useEffect, useState } from 'react';

const App = () => {
  // const [covers, setCovers] = useState([]);

  // useEffect(() => {
  //   // Mettre à jour l'état des couvertures avec les données de votre JSON importé
  //   if (Logements && Logements.Logements) {
  //     setCovers(Logements.Logements);

  //   }
  // }, []);

  // const handleClick = (coverId) => {
  //   // Gérer le clic sur un carré ici
  //   console.log(`Carré cliqué : ${coverId}`);
  // };
  const SixFirst = Logements.slice(0,6);
  console.log(Logements)
  return (
    <div className='Hébergements'>
      {SixFirst.map((logement, index) => (
        <div className='Hébergements-Carte' key={index}>
          <img 
            className='Hébergements-Img'
            src={logement.cover}
            alt={`Logement ${index}`}
          />
          <p className='Hébergements-Titre'>{logement.title}</p>
        </div>
      ))}
    </div>
  );
};
  // return (

  // <div className="Hébergements">


  //   </div>


  // );



export default App;
