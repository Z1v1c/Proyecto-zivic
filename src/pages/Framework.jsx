import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const Framework = () => {
  // Reels de Framework
  const reels = [
    { 
      id: 1, 
      embedUrl: 'DTwGX0AERse',
      url: 'https://www.instagram.com/reel/DTwGX0AERse/?igsh=dDk3cXVvMjVxYzI4',
      title: '¿Qué es Python?',
      description: 'Python es un lenguaje de programación de alto nivel, creado para ser simple, claro y fácil de entender. Su sintaxis es limpia y cercana al lenguaje humano, lo que permite escribir código de forma rápida y ordenada. Se utiliza en desarrollo web, análisis de datos, inteligencia artificial, automatización y más.'
    },
    { 
      id: 2, 
      embedUrl: 'DTwGmbmkdU2',
      url: 'https://www.instagram.com/reel/DTwGmbmkdU2/?igsh=dnl4YjI0ODRqdjUx',
      title: '¿Quién creó Python?',
      description: 'Python fue creado por Guido van Rossum, un programador de los Países Bajos, a finales de los años 80. Su objetivo era desarrollar un lenguaje fácil de leer, simple de escribir y poderoso. En 1991 lanzó la primera versión pública de Python.'
    },
    { 
      id: 3, 
      embedUrl: 'DTwG8F6ES_F',
      url: 'https://www.instagram.com/reel/DTwG8F6ES_F/?igsh=MWxqMjdjeGEya3RhZw==',
      title: '¿Qué es HTML?',
      description: 'HTML (HyperText Markup Language) es el lenguaje base de la web. Se utiliza para estructurar y organizar el contenido de las páginas web, como textos, imágenes, videos, enlaces y formularios. Es el esqueleto de cualquier sitio web.'
    },
    { 
      id: 4, 
      embedUrl: 'DTwHPC3EYnA',
      url: 'https://www.instagram.com/reel/DTwHPC3EYnA/?igsh=MTFheHFvdDByOGlyeQ==',
      title: 'Inicios de HTML',
      description: 'HTML fue creado a principios de los años 90 por Tim Berners-Lee en el CERN. Su objetivo era desarrollar un lenguaje simple que permitiera compartir documentos y enlaces entre computadoras. Con el tiempo, HTML evolucionó hasta convertirse en el lenguaje fundamental de la web moderna.'
    },
    { 
      id: 5, 
      embedUrl: 'DTwHcexEZYl',
      url: 'https://www.instagram.com/reel/DTwHcexEZYl/?igsh=MXgxcDB5MzZla2g1Yg==',
      title: 'La WWW y su funcionamiento en Internet',
      description: 'La WWW (World Wide Web) es la parte del Internet que permite acceder y navegar por páginas web mediante navegadores. Fue inventada por Tim Berners-Lee en 1989 y revolucionó la forma en que consultamos información y compartimos contenidos en la red.'
    },
    { 
      id: 6, 
      embedUrl: 'DTwHpF6kdc1',
      url: 'https://www.instagram.com/reel/DTwHpF6kdc1/?igsh=MWR0aG1hemY5a3F1MA==',
      title: '¿Qué es CSS en HTML?',
      description: 'CSS (Cascading Style Sheets) es un lenguaje que se utiliza junto con HTML para dar estilo y diseño a las páginas web. Define colores, fuentes, tamaños, márgenes y posiciones, permitiendo crear páginas visualmente atractivas y uniformes.'
    },
    { 
      id: 7, 
      embedUrl: 'DTwHzU4kRu9',
      url: 'https://www.instagram.com/reel/DTwHzU4kRu9/?igsh=MXgwOWV0NTZrMHBuaA==',
      title: '¿Qué es React?',
      description: 'React es una librería de JavaScript creada por Facebook para construir interfaces de usuario interactivas. Facilita la creación de componentes reutilizables, mejorando el rendimiento y la experiencia del usuario en aplicaciones web y móviles.'
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="video-main">
        <div className="video-container">
          <h1>Framework</h1>
          <p className="subtitle">Diseño y Creatividad Visual</p>
          
          <div className="intro-section">
            <p>
              La programación es la forma de dar vida a nuestras ideas y crear soluciones digitales que usamos todos los días. 
              Con ella, es posible construir aplicaciones, páginas web y herramientas interactivas que facilitan la 
              vida y conectan a las personas.
            </p>
            <p>
              Existen diferentes formas de hacerlo: algunos lenguajes permiten escribir código de manera sencilla y directa, 
              mientras que otros ayudan a crear experiencias dinámicas y visualmente atractivas. Gracias a estas herramientas, 
              los proyectos pueden ser ordenados, funcionales y fáciles de usar.
            </p>
            <p>
              En esencia, programar combina creatividad, lógica y resolución de problemas, transformando cualquier idea en 
              algo útil, divertido o innovador que otros puedan disfrutar y aprovechar.
            </p>
          </div>
          
          <div className="video-grid reels-grid">
            {reels.map((reel) => (
              <div key={reel.id} className="video-card reel-card">
                <h3 className="reel-video-title">{reel.title}</h3>
                <p className="reel-video-description">{reel.description}</p>
                <div className="reel-embed-wrapper">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.embedUrl}/embed/`}
                    style={{
                      width: '100%',
                      height: '700px',
                      border: 'none',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media;"
                  ></iframe>
                </div>
                <a 
                  href={reel.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="reel-button"
                >
                  <span className="button-icon">▶</span>
                  Ver Reel
                </a>
              </div>
            ))}
          </div>
          
          <div className="info-box">
            <h3>🎨 Framework - Diseño Visual</h3>
            <p>Explora nuestra galería de proyectos creativos en Instagram. Cada reel muestra nuestro enfoque innovador en el diseño gráfico y la comunicación visual.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Framework;
