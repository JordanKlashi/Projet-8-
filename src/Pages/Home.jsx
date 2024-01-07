import Banner from "../Components/header/Banner.jsx";
import Gallerie from "../Components/main/Gallerie.jsx";
import LogoAccueil from "../img/Banner_Accueil.png";
const title = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <>
      <main>
        <Banner title={title} imgUrl={LogoAccueil} />
        <Gallerie />
      </main>
    </>
  );
}

export default Home;
