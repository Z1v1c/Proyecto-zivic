import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2>Mi Sitio</h2>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/dandy-hats" onClick={closeMenu}>Dandy Hats</Link></li>
          <li><Link to="/framework" onClick={closeMenu}>Framework</Link></li>
          <li><Link to="/metodologias" onClick={closeMenu}>Metodologías</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
