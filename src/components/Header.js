import logo from '../images/RickAndMorty.png'
import '../styles/layout/Header.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Link to="/" className="goHomePage"><img src={logo}alt="Logo de la serie Rick y Morty" className='header_logo' /></Link>
    
    </header>
  );
}

export default Header;
