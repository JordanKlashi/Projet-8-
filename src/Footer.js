import './style/Footer.scss'
import LogoFooter from './img/logo-footer.png'


function Footer() {
    return (
        <footer>
        <img className='Logo-Footer' src={LogoFooter} alt='logo-pied-de-page'></img>
        <p className='copyright'> © 2020 Kasa. All Rights reserved</p>
        </footer>
    )
}

export default Footer