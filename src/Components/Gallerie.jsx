import Card from "./Card";
import Logements from "../logements.json";

const Gallerie= () => {

    return (
        <div className="Hebergements">
        {Logements.map((logement,index) => (
            <Card key={index} imgSource={logement.cover} title={logement.title} id={logement.id} />
            
        ))}
        </div>
    )
}


export default Gallerie