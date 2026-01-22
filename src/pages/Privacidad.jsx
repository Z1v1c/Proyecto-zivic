import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Privacidad.css';

const Privacidad = () => {
  return (
    <div className="terms-page-container">
      <Header />
      <main className="terms-main">
        <div className="terms-container">
          <h1>Política de Privacidad</h1>
          
          <section className="terms-section">
            <p>
              En esta página se respeta la privacidad de los usuarios. La información personal que se recaba 
              es tratada de manera responsable y conforme a lo establecido por la ley.
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>
              Podemos recopilar la siguiente información:
            </p>
            <ul>
              <li>Nombre</li>
              <li>Correo electrónico</li>
              <li>Comentarios</li>
              <li>Datos proporcionados a través de formularios del sitio</li>
            </ul>

            <h2>2. Uso de la información</h2>
            <p>
              La información recopilada se utiliza para:
            </p>
            <ul>
              <li>Permitir el acceso y uso del sitio</li>
              <li>Identificar al usuario</li>
              <li>Mejorar el funcionamiento y la experiencia de navegación</li>
              <li>Establecer comunicación cuando sea necesario</li>
            </ul>

            <h2>3. Protección de la información</h2>
            <p>
              Se aplican medidas de seguridad para proteger los datos personales y evitar accesos no 
              autorizados, pérdida o uso indebido de la información.
            </p>

            <h2>4. Compartición de información</h2>
            <p>
              La información personal no será compartida, vendida ni cedida a terceros, salvo cuando sea 
              requerido por alguna autoridad legal.
            </p>

            <h2>5. Cambios en los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos de Privacidad en cualquier momento. 
              Cualquier cambio será publicado en esta misma sección.
            </p>

            <h2>6. Aceptación</h2>
            <p>
              El uso de este sitio implica la aceptación de los presentes Términos de Privacidad.
            </p>
          </section>
          
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
