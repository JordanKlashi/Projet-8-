import LogoFooter from "../../img/logo-footer.png";

function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

function Footer() {
  const currentYear = getCurrentYear();
  return (
    <footer>
      <img
        className="Logo-Footer"
        src={LogoFooter}
        alt="logo-pied-de-page"
      ></img>
      <p className="copyright">© {currentYear} Kasa. All Rights reserved</p>
    </footer>
  );
}

export default Footer;
