import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Privacidad.css';

const Terminos = () => {
  return (
    <div className="terms-page-container">
      <Header />
      <main className="terms-main">
        <div className="terms-container">
          <h1>Términos y Condiciones</h1>
          
          <section className="terms-section">
            <p>
              Al acceder y utilizar este sitio web, el usuario acepta cumplir con los presentes Términos y 
              Condiciones. Si no está de acuerdo con ellos, deberá abstenerse de usar la página.
            </p>
            <p>
              El usuario se compromete a hacer un uso responsable del sitio, respetando la ley y evitando 
              actividades que puedan afectar su funcionamiento o a terceros.
            </p>
            <p>
              Todo el contenido publicado en el sitio es propiedad del titular y está protegido por derechos 
              de autor. No se permite su reproducción total o parcial sin autorización previa.
            </p>
            <p>
              El titular no se hace responsable por daños derivados del uso del sitio ni garantiza que la 
              información sea siempre exacta o que el servicio sea ininterrumpido.
            </p>
            <p>
              Estos Términos y Condiciones pueden modificarse en cualquier momento y se rigen por la 
              legislación vigente.
            </p>
          </section>
          
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terminos;
