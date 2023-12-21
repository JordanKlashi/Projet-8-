import '../style/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../Components/Header.js';
import Banner from '../Components/Banner.js';
import Footer from '../Components/Footer.js';

function Apropos() {
    return (
        <div>
            <Header /><Banner />
            <ul className="Apropos-Liste">
                <li className="Apropos-Liste-Text Fiabilité">Fiabilité<span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span></li>
                <li className="Apropos-Liste-Text">Respect<span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span></li>
                <li className="Apropos-Liste-Text">Service<span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span></li>
                <li className="Apropos-Liste-Text">Sécurité<span className='Apropos-Liste-Font'><FontAwesomeIcon icon={faChevronUp} /></span></li>
            </ul>
            <Footer />
        </div>
    );
}

export default Apropos