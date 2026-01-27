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
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Estilo y Elegancia',
      description: 'Descubre los sombreros más elegantes de nuestra colección'
    },
    { 
      id: 2, 
      videoId: '7457766949612604710',
      url: 'https://www.tiktok.com/@dandyhats/video/7457766949612604710',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Colección Premium',
      description: 'Sombreros de alta calidad para cada ocasión'
    },
    { 
      id: 3, 
      videoId: '7457768105838914822',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768105838914822',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Tendencias',
      description: 'Los diseños más modernos y con estilo'
    },
    { 
      id: 4, 
      videoId: '7457768621996485894',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768621996485894',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Detalles Únicos',
      description: 'Cada sombrero cuenta una historia'
    },
    { 
      id: 5, 
      videoId: '7457769067009838342',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769067009838342',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Artesanía',
      description: 'Hecho con dedicación y pasión'
    },
    { 
      id: 6, 
      videoId: '7457769681826270469',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769681826270469',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
      title: 'Estilo Clásico',
      description: 'La elegancia nunca pasa de moda'
    },
    { 
      id: 7, 
      videoId: '7457770149673045254',
      url: 'https://www.tiktok.com/@dandyhats/video/7457770149673045254',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oUqACBfJeAIgkCQQDAffgBzIBPrGEjeBs5~tplv-dmt-logom:tos-maliva-i-0000/oQBGI8BAnCWAb4I7fAef9bA.image',
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
                <div 
                  className="video-preview tiktok-preview-with-image"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255, 0, 80, 0.8) 0%, rgba(0, 242, 234, 0.8) 100%), url(https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&h=1200&fit=crop)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                >
                  <div className="video-overlay-new">
                    <div className="play-icon-large">▶</div>
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
