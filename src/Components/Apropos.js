import '../style/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Apropos() {
    return (
        <ul className="Apropos-Liste">
            <li className="Apropos-Liste-Text Fiabilité">Fiabilité</li>
            <span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span>
            <li className="Apropos-Liste-Text">Respect</li>
            <span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span>
            <li className="Apropos-Liste-Text">Service</li>
            <span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span>
            <li className="Apropos-Liste-Text">Sécurité</li>
            <span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span>
        </ul>

    )
}

export default Apropos