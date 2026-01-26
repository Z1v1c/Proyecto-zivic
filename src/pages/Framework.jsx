import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const Framework = () => {
  // Reels de Framework
  const reels = [
    { 
      id: 1, 
      url: 'https://www.instagram.com/reel/DTwGX0AERse/?igsh=dDk3cXVvMjVxYzI4',
      title: 'Diseño Innovador',
      description: 'Explora nuestras creaciones más innovadoras'
    },
    { 
      id: 2, 
      url: 'https://www.instagram.com/reel/DTwGmbmkdU2/?igsh=dnl4YjI0ODRqdjUx',
      title: 'Estilo Único',
      description: 'Cada diseño cuenta una historia diferente'
    },
    { 
      id: 3, 
      url: 'https://www.instagram.com/reel/DTwG8F6ES_F/?igsh=MWxqMjdjeGEya3RhZw==',
      title: 'Creatividad',
      description: 'La creatividad no tiene límites'
    },
    { 
      id: 4, 
      url: 'https://www.instagram.com/reel/DTwHPC3EYnA/?igsh=MTFheHFvdDByOGlyeQ==',
      title: 'Tendencias',
      description: 'Siguiendo las últimas tendencias del diseño'
    },
    { 
      id: 5, 
      url: 'https://www.instagram.com/reel/DTwHcexEZYl/?igsh=MXgxcDB5MzZla2g1Yg==',
      title: 'Inspiración',
      description: 'Inspiración en cada detalle'
    },
    { 
      id: 6, 
      url: 'https://www.instagram.com/reel/DTwHpF6kdc1/?igsh=MWR0aG1hemY5a3F1MA==',
      title: 'Arte Visual',
      description: 'Donde el arte se encuentra con el diseño'
    },
    { 
      id: 7, 
      url: 'https://www.instagram.com/reel/DTwHzU4kRu9/?igsh=MXgwOWV0NTZrMHBuaA==',
      title: 'Colección Especial',
      description: 'Lo mejor de nuestra colección'
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
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: 'calc(100% - 2px)'
                    }}
                  >
                    <a 
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Instagram
                    </a>
                  </blockquote>
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
