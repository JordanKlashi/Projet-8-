import ErreurImg from '../img/404.png'
import '../style/index.scss'
function Erreur() {
    return (
        <div className='Erreur'>
            <img className='Erreur-Img' src={ErreurImg} alt='Erreur404'></img>
            <p className='Erreur-Txt'>Oups! La page que vous demandez n'existe pas.</p>
            <a className='Erreur-Link'>Retourner sur la page d'accueil</a>
        </div>
    )
}

export default Erreur