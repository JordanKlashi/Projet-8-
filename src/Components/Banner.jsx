import '../style/index.scss';
import LogoAccueil from '../img/Banner_Accueil.png';

function Banner() {
    return(
        <div className='Banner'>
        <img className='Banner-Logo' src={LogoAccueil} alt="Bannière d'acceuil"></img>
        <span className='Banner-Text'>Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default Banner