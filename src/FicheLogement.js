import PhotoLogement from './img/Carrousel.png';
import './style/index.scss';

function FicheLogements() {
    return (
        <div className="FicheLogements">
            <img className="FicheLogements-Img" alt='logement' src={PhotoLogement}></img>
            <div className='FicheLogements-test'>
                <div className='FicheLogements-Titre'>
                <h2>Cozy loft on the Canal Saint-Martin</h2>
                <p>Endroit</p>
                </div>
                <p className='FicheLogements-ProfilLoueur'>Prénom du loueur</p>
            </div>    
            <div className='FicheLogements-Filter'>
                <p className='FicheLogements-Tag'>Tag</p>
                <p className='FicheLogements-Tag'>Tag</p>
                <p className='FicheLogements-Tag'>Tag</p>
                <span className='FicheLogements-Star'>Etoiles</span>
            </div>
            <div className='FicheLogements-Button'>   
                <p className='FicheLogements-Description'>Description</p>
                <p className='FicheLogements-Equipements'>Equipements</p>
            </div>     
        </div>
    )
}

export default FicheLogements