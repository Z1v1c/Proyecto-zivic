import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const Metodologias = () => {
  // Videos de YouTube sobre Metodologías
  const youtubeVideos = [
    { 
      id: 1, 
      videoId: 'vmO3SPXtxXo', 
      title: 'Metodologías de Desarrollo',
      description: 'Explora las mejores prácticas de desarrollo'
    },
    { 
      id: 2, 
      videoId: 'ZQgx1eNNEKw', 
      title: 'Programación Eficiente',
      description: 'Técnicas y estrategias para programar mejor'
    },
    { 
      id: 3, 
      videoId: 'iqeZW1qpnOA', 
      title: 'Mejores Prácticas',
      description: 'Aprende los fundamentos del buen código'
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
