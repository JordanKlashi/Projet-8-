import ErreurImg from '../img/404.png';
import '../style/index.scss';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import { Link } from 'react-router-dom';

function Erreur() {

    return (
        <div>
            <Header />
            <div className='Erreur'>
                <img className='Erreur-Img' src={ErreurImg} alt='Erreur404'></img>
                <p className='Erreur-Txt'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='Erreur-Link'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>



    )
}

export default Erreur