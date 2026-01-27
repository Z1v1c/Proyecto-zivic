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
      thumbnail: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1200&fit=crop',
      title: '¿Quién es el fundador de "Dandy Hats"?',
      description: 'Leonardo Sandoval creó esta marca en Los Ángeles, California, con la visión de diseñar gorras que fueran mucho más que un accesorio: piezas de estilo con actitud, personalidad y un carácter único. Su objetivo desde el principio fue combinar calidad artesanal, diseño audaz y una identidad fuertemente ligada a la cultura streetwear.'
    },
    { 
      id: 2, 
      videoId: '7457766949612604710',
      url: 'https://www.tiktok.com/@dandyhats/video/7457766949612604710',
      thumbnail: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=1200&fit=crop',
      title: 'Colaboraciones con artistas: Dandy Hats x Junior H',
      description: 'Dandy Hats ha llevado su estilo urbano y diseño premium más allá del streetwear tradicional al colaborar con figuras influyentes de la música regional urbana. Una de sus colaboraciones más destacadas es la familia de gorras creadas junto al artista mexicano Junior H, uno de los máximos exponentes de los corridos tumbados y la cultura Sad Boyz.'
    },
    { 
      id: 3, 
      videoId: '7457768105838914822',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768105838914822',
      thumbnail: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&h=1200&fit=crop',
      title: 'Presencia y alcance en redes',
      description: 'La marca Dandy Hats tiene una presencia significativa en TikTok, donde su cuenta de videos ha acumulado alrededor de 617 mil seguidores y más de 18.7 millones de likes, con un promedio de casi 278 mil vistas por video y buen nivel de interacción por publicación.'
    },
    { 
      id: 4, 
      videoId: '7457768621996485894',
      url: 'https://www.tiktok.com/@dandyhats/video/7457768621996485894',
      thumbnail: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&h=1200&fit=crop',
      title: 'Exclusividad y diseño en Dandy Hats',
      description: 'La marca Dandy Hats se distingue por ofrecer diseños exclusivos y ediciones limitadas, lo que refuerza su valor como accesorio de moda y objeto de colección. Muchos de los modelos lanzados son piezas limitadas en cantidad, producidas en tan solo 300 o 1,000 unidades en todo el mundo.'
    },
    { 
      id: 5, 
      videoId: '7457769067009838342',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769067009838342',
      thumbnail: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=800&h=1200&fit=crop',
      title: 'Inicios de los diseños de Dandy Hats',
      description: 'La marca Dandy Hats nació en 2015, cuando Leonardo Sandoval decidió crear algo más que simples gorras: quería diseñar accesorios con personalidad y significado, que fueran expresión de estilo y confianza. Desde sus primeros días en Los Ángeles, California, la idea fue poner en cada pieza una historia visual.'
    },
    { 
      id: 6, 
      videoId: '7457769681826270469',
      url: 'https://www.tiktok.com/@dandyhats/video/7457769681826270469',
      thumbnail: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&h=1200&fit=crop',
      title: '¿Valen la pena las gorras Dandy Hats?',
      description: 'Dandy Hats se ha posicionado como una marca de gorras premium dentro del streetwear, y su valor va más allá de lo funcional. Sus diseños destacan por ser exclusivos, de edición limitada y con una identidad visual fuerte, pensados para quienes buscan diferenciarse y expresar estilo propio.'
    },
    { 
      id: 7, 
      videoId: '7457770149673045254',
      url: 'https://www.tiktok.com/@dandyhats/video/7457770149673045254',
      thumbnail: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=1200&fit=crop',
      title: 'Verificación y autenticidad de Dandy Hats',
      description: 'Las gorras de Dandy Hats se presentan como productos originales y de edición premium. La marca ofrece varios elementos que te permiten verificar que una pieza es auténtica y legítima. Las gorras originales suelen llegar en un empaque personalizado con el logo de Dandy Hats.'
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
                <div className="video-preview tiktok-preview-with-image">
                  <img 
                    src={tiktok.thumbnail} 
                    alt={tiktok.title}
                    className="tiktok-thumbnail-img"
                  />
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
