import Logo from './LOGO.png';
import './style/Banner.scss';


function Header() {
    return (
      <header>
        <nav>
            <img src={Logo} className="Logo" alt="Logo-Kasa"></img>
                <div className='Link'>
                    <a className="Link_Accueil" href={Logo}>Accueil</a>
                    <a className="Link_Apropos" href={Logo}>A propos</a>
                </div>
        </nav>
      </header>
      )
}
export default Header