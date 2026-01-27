import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const Metodologias = () => {
  // Videos de YouTube sobre Metodologías
  const youtubeVideos = [
    { 
      id: 1, 
      videoId: 'vmO3SPXtxXo', 
      title: 'Metodologías ágiles en programación',
      description: 'Las metodologías ágiles son un conjunto de enfoques para desarrollar software de manera flexible, rápida y colaborativa. A diferencia de los métodos tradicionales, que siguen un plan rígido de principio a fin, las metodologías ágiles permiten adaptarse a cambios, responder a las necesidades del cliente y mejorar continuamente el producto durante todo el proceso de desarrollo. Entre las metodologías ágiles más conocidas están Scrum, Kanban y Extreme Programming (XP). Todas comparten principios clave: Trabajo en equipo y comunicación constante entre desarrolladores y clientes, entrega incremental y frecuente de funcionalidades, permitiendo recibir retroalimentación temprana, y adaptabilidad frente a cambios de requerimientos o prioridades. El objetivo es crear software de alta calidad de forma más eficiente, fomentando la colaboración, reduciendo errores y asegurando que el producto final cumpla con las expectativas del usuario.'
    },
    { 
      id: 2, 
      videoId: 'ZQgx1eNNEKw', 
      title: 'Diagrama de flujo y su función en metodologías de programación',
      description: 'Un diagrama de flujo es una representación gráfica de un proceso o algoritmo, que utiliza símbolos como rectángulos, rombos y flechas para mostrar paso a paso cómo se realiza una tarea o se resuelve un problema. Es una herramienta fundamental para planificar y organizar la programación antes de escribir código. En las metodologías ágiles, los diagramas de flujo ayudan a los equipos a visualizar procesos de manera clara y rápida, facilitando la comprensión de las tareas, detectar errores o redundancias antes de la implementación, lo que ahorra tiempo y esfuerzo, comunicar ideas entre desarrolladores, clientes y otras partes interesadas, asegurando que todos tengan la misma visión del proyecto, y planificar iteraciones o sprints de forma organizada, mostrando cómo cada paso del proceso contribuye al producto final.'
    },
    { 
      id: 3, 
      videoId: 'iqeZW1qpnOA', 
      title: 'Hosting y dominio: cómo funcionan las páginas web',
      description: 'Para que una página web exista y sea accesible en Internet, necesitamos dos elementos fundamentales: el dominio y el hosting. El dominio es el nombre de tu sitio web, la dirección que los usuarios escriben en el navegador para llegar a tu página, como www.google.com o www.tuempresa.com. Es la dirección digital que identifica tu página y la hace fácil de recordar. El hosting, por otro lado, es el espacio donde se almacenan todos los archivos de tu sitio web: textos, imágenes, videos y bases de datos. Funciona como un "terreno digital" que mantiene tu página disponible en línea las 24 horas del día. Sin hosting, tu dominio no tendría contenido que mostrar. En conjunto, dominio y hosting trabajan como dirección y casa: el dominio es la dirección que escribes, y el hosting es la casa donde vive todo el contenido de tu web.'
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="video-main">
        <div className="video-container">
          <h1>Metodologías de Programación</h1>
          <p className="subtitle">Aprende las mejores prácticas y técnicas</p>
          
          <div className="intro-section">
            <p>
              La programación y la tecnología permiten transformar ideas en soluciones digitales que facilitan la vida cotidiana. 
              Desde aplicaciones hasta sitios web, cada proyecto requiere planificación, organización y creatividad para funcionar 
              correctamente y ofrecer una experiencia de calidad a los usuarios.
            </p>
            <p>
              Asimismo, un proyecto digital necesita un espacio en Internet donde alojarse y una dirección que lo haga accesible, 
              garantizando que la información y las herramientas estén disponibles de manera confiable.
            </p>
            <p>
              En conjunto, estos conceptos muestran cómo la tecnología puede convertir ideas en herramientas útiles, eficientes y 
              accesibles, capaces de impactar positivamente en la vida de las personas.
            </p>
          </div>
          
          <div className="video-grid youtube-grid">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="video-card youtube-card">
                <h3 className="youtube-video-title">{video.title}</h3>
                <p className="youtube-video-description">{video.description}</p>
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="youtube-button"
                >
                  <span className="button-icon">▶</span>
                  Ver en YouTube
                </a>
              </div>
            ))}
          </div>
          
          <div className="info-box">
            <h3>📚 Metodologías de Programación</h3>
            <p>Descubre contenido educativo sobre desarrollo de software, mejores prácticas y técnicas de programación que te ayudarán a mejorar tus habilidades.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Metodologias;
