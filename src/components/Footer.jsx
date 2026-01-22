import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>¿Tienes alguna duda? Contáctanos</h3>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <span>📞</span>
              </div>
              <div className="contact-details">
                <span className="contact-label">Teléfono</span>
                <a href="tel:5648290197">564-829-0197</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="contact-icon-wrapper">
                <span>✉️</span>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:agzzv27@gmail.com">agzzv27@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Mi Sitio. Todos los derechos reservados.</p>
          <div className="footer-links">
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
