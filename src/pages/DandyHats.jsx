import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const DandyHats = () => {
  // TikToks de Dandy Hats
  const tiktoks = [
    { 
      id: 1, 
      videoId: '7457766506044067110',
      url: 'https://www.tiktok.com/@dandyhats/video/7457766506044067110',
      title: 'Estilo y Elegancia',
      description: 'Descubre los sombreros más elegantes de nuestra colección'
    },
    { 
      id: 2, 
      videoId: '7457766949612604710',
      url: 'https://www.tiktok.com/@dandyhats/video/7457766949612604710',
      title: 'Colección Premium',
      description: 'Sombreros de alta calidad para cada ocasión'
    },
    { 
      id: 3, 
      videoId: '7457768105838914822',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768105838914822',
      title: 'Tendencias',
      description: 'Los diseños más modernos y con estilo'
    },
    { 
      id: 4, 
      videoId: '7457768621996485894',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768621996485894',
      title: 'Detalles Únicos',
      description: 'Cada sombrero cuenta una historia'
    },
    { 
      id: 5, 
      videoId: '7457769067009838342',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769067009838342',
      title: 'Artesanía',
      description: 'Hecho con dedicación y pasión'
    },
    { 
      id: 6, 
      videoId: '7457769681826270469',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769681826270469',
      title: 'Estilo Clásico',
      description: 'La elegancia nunca pasa de moda'
    },
    { 
      id: 7, 
      videoId: '7457770149673045254',
      url: 'https://www.tiktok.com/@dandyhats/video/7457770149673045254',
      title: 'Nueva Colección',
      description: 'Lo último en sombreros de diseñador'
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="video-main">
        <div className="video-container">
          <h1>Dandy Hats</h1>
          <p className="subtitle">Gorras con Estilo y Personalidad</p>
          
          <div className="intro-section">
            <p>
              Dandy Hats es una marca enfocada en la creación de gorras con estilo moderno y original, 
              pensadas para personas que buscan expresar su personalidad a través de la moda urbana. 
              Sus diseños combinan creatividad, calidad y tendencia, convirtiendo cada gorra en un accesorio distintivo.
            </p>
            <p>
              La marca se caracteriza por cuidar cada detalle, desde los materiales hasta los acabados, 
              ofreciendo productos cómodos, duraderos y visualmente atractivos. Dandy Hats no solo representa moda, 
              sino también identidad, actitud y autenticidad dentro del estilo streetwear.
            </p>
          </div>
          
          <div className="video-grid tiktok-grid">
            {tiktoks.map((tiktok) => (
              <div key={tiktok.id} className="video-card tiktok-card">
                <div className="video-preview tiktok-preview-bg">
                  <div className="video-overlay-new">
                    <div className="tiktok-icon-svg">
                      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{width: '80px', height: '80px'}}>
                        <path d="M38.43,8.95c-2.87-1.87-4.79-5.03-4.79-8.64c0-0.2-0.01-0.39-0.02-0.59c-0.01-0.26-0.03-0.51-0.05-0.77h-7.72v24.73c0,3.83-3.11,6.94-6.94,6.94c-1.2,0-2.33-0.31-3.31-0.84c-1.96-1.07-3.28-3.15-3.28-5.54c0-3.47,2.82-6.29,6.29-6.29c0.65,0,1.28,0.1,1.87,0.29V10.6c-0.62-0.09-1.24-0.13-1.87-0.13C9.26,10.47,2.5,17.23,2.5,25.58c0,5.04,2.45,9.51,6.23,12.28c2.38,1.75,5.31,2.79,8.47,2.79c8.35,0,15.11-6.76,15.11-15.11V15.09c3.28,2.35,7.27,3.74,11.59,3.74v-7.72C40.89,11.11,39.49,10.25,38.43,8.95z" fill="white"/>
                      </svg>
                    </div>
                    <div className="platform-badge">TikTok</div>
                  </div>
                  <div className="video-number">Video {tiktok.id}</div>
                </div>
                <div className="video-info">
                  <h3 className="tiktok-video-title">{tiktok.title}</h3>
                  <p className="tiktok-video-description">{tiktok.description}</p>
                  <a 
                    href={tiktok.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tiktok-button"
                  >
                    <span className="button-icon">▶</span>
                    Ver en TikTok
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="info-box">
            <h3>🎩 Dandy Hats - Sombreros con Estilo</h3>
            <p>Explora nuestra colección exclusiva de sombreros. Cada pieza refleja elegancia, calidad y diseño único. Haz clic en cualquier video para verlo en TikTok.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DandyHats;
