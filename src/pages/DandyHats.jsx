import Header from '../components/Header';
import Footer from '../components/Footer';
import './VideoPages.css';

const DandyHats = () => {
  // TikToks de Dandy Hats
  const tiktoks = [
    { 
      id: 1, 
      videoId: '7457766506044067110',
      url: 'https://vt.tiktok.com/ZSa2b5VNS/',
      title: 'Estilo y Elegancia',
      description: 'Descubre los sombreros más elegantes de nuestra colección'
    },
    { 
      id: 2, 
      videoId: '7457766949612604710',
      url: 'https://vt.tiktok.com/ZSa2bf2dV/',
      title: 'Colección Premium',
      description: 'Sombreros de alta calidad para cada ocasión'
    },
    { 
      id: 3, 
      videoId: '7457768105838914822',
      url: 'https://vt.tiktok.com/ZSa2bPEos/',
      title: 'Tendencias',
      description: 'Los diseños más modernos y con estilo'
    },
    { 
      id: 4, 
      videoId: '7457768621996485894',
      url: 'https://vt.tiktok.com/ZSa2b5YWF/',
      title: 'Detalles Únicos',
      description: 'Cada sombrero cuenta una historia'
    },
    { 
      id: 5, 
      videoId: '7457769067009838342',
      url: 'https://vt.tiktok.com/ZSa2bkWe1/',
      title: 'Artesanía',
      description: 'Hecho con dedicación y pasión'
    },
    { 
      id: 6, 
      videoId: '7457769681826270469',
      url: 'https://vt.tiktok.com/ZSa2bNuxU/',
      title: 'Estilo Clásico',
      description: 'La elegancia nunca pasa de moda'
    },
    { 
      id: 7, 
      videoId: '7457770149673045254',
      url: 'https://vt.tiktok.com/ZSa2b5RaX/',
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
                <h3 className="tiktok-video-title">{tiktok.title}</h3>
                <p className="tiktok-video-description">{tiktok.description}</p>
                <div className="tiktok-embed-wrapper">
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${tiktok.videoId}?lang=es-ES`}
                    style={{
                      width: '100%',
                      height: '600px',
                      border: 'none',
                      borderRadius: '10px'
                    }}
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media;"
                  ></iframe>
                </div>
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
