import Logo from '../img/LOGO.png';
import '../style/index.scss';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header>
        <nav>
            <img src={Logo} className="Logo" alt="Logo-Kasa"></img>
                <div className='Link'>
                    <Link to='/' className='Link_Accueil'>Accueil</Link>
                    <Link to='/Apropos' className='Link_Apropos'>A propos</Link>
                </div>
        </nav>
      </header>
      )
}
export default Header