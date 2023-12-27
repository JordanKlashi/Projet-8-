import CardLogement from "./CardLogement";
import Logements from "../logements.json";
import { useParams } from 'react-router-dom';




const GallerieLogement= () => {

    const { id } = useParams();
    console.log("ID from URL:", id)
    
   

    return (
        <>
        {Logements.map((logement) => (
            <CardLogement 
            key={logement.id}
            imgSource={logement.cover} 
            title={logement.title} 
            id={logement.id} 
            location={logement.location}
            description={logement.description}
            equipement={logement.equipments}
            tags={logement.tags}
            hostName={logement.host.name}
            hostPicture={logement.host.picture}
            rating={logement.rating}

            />
            
        ))} 
        </>
    )
}


export default GallerieLogement