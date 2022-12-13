import logo from '../images/RickAndMorty.png'
import '../styles/layout/Header.scss'

function Header() {
  return (
    <header className='header'>
    <img src={logo}alt="Logo de la serie Rick y Morty" className='header_logo' />
    </header>
  );
}

export default Header;
