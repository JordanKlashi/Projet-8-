import Logo from "../../img/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} className="Logo" alt="Logo-Kasa"></img>
        <div className="Link">
          <NavLink to="/Projet-8-/" activeclassname="active" className="Link_Accueil">
            Accueil
          </NavLink>
          <NavLink
            to="/Projet-8-/Apropos"
            activeclassname="active"
            className="Link_Apropos"
          >
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
