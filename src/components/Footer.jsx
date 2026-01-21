import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Mi Sitio. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#privacy">Privacidad</a>
          <a href="#terms">Términos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
