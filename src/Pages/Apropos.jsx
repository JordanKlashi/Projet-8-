import Banner from "../Components/global/Banner.jsx";
import Collapse from "../Components/global/Collapse.jsx";
import logoAccueil from "../img/Banner_Apropos.png";

function Apropos() {
  const data = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que lesstandards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main>
      <Banner imgUrl={logoAccueil} />
      <div className="Apropos">
        <div className="Apropos-Collapse">
          {data.map((item, i) => (
            <Collapse key={i} content={item.content} title={item.title} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Apropos;
