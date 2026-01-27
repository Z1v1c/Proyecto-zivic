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
      description: 'Python es un lenguaje de programación de alto nivel, creado para ser simple, claro y fácil de entender, incluso para personas que están comenzando en el mundo de la tecnología. Su sintaxis es limpia y cercana al lenguaje humano, lo que permite escribir código de forma rápida y ordenada. Este lenguaje se utiliza en una gran variedad de áreas como desarrollo web, análisis de datos, inteligencia artificial, automatización de tareas, videojuegos y ciberseguridad. Gracias a su versatilidad y potencia, Python se ha convertido en uno de los lenguajes más populares y utilizados a nivel mundial.'
    },
    { 
      id: 2, 
      embedUrl: 'DTwGmbmkdU2',
      url: 'https://www.instagram.com/reel/DTwGmbmkdU2/?igsh=dnl4YjI0ODRqdjUx',
      title: '¿Quién creó Python?',
      description: 'Python fue creado por Guido van Rossum, un programador de los Países Bajos, a finales de los años 80 y principios de los 90. Su objetivo al diseñar Python era desarrollar un lenguaje de programación que fuera fácil de leer, simple de escribir y poderoso, que pudiera ser utilizado tanto por principiantes como por expertos. Guido buscaba un lenguaje que combinara claridad, elegancia y eficiencia, inspirándose en otros lenguajes como ABC, C y Modula-3, pero eliminando la complejidad innecesaria que dificultaba aprender a programar. En 1991 lanzó la primera versión pública de Python, y desde entonces ha evolucionado hasta convertirse en uno de los lenguajes más populares del mundo.'
    },
    { 
      id: 3, 
      embedUrl: 'DTwG8F6ES_F',
      url: 'https://www.instagram.com/reel/DTwG8F6ES_F/?igsh=MWxqMjdjeGEya3RhZw==',
      title: '¿Qué es HTML?',
      description: 'HTML, que significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto), es el lenguaje base de la web. Se utiliza para estructurar y organizar el contenido de las páginas web, como textos, imágenes, videos, enlaces y formularios. A diferencia de un lenguaje de programación, HTML no "programa" acciones, sino que define la estructura y el significado del contenido para que los navegadores puedan mostrarlo correctamente. Es el esqueleto de cualquier sitio web, sobre el cual se agregan estilos con CSS y funcionalidades con JavaScript. En pocas palabras, HTML es la columna vertebral de la web, indispensable para crear cualquier página que se pueda ver en internet.'
    },
    { 
      id: 4, 
      embedUrl: 'DTwHPC3EYnA',
      url: 'https://www.instagram.com/reel/DTwHPC3EYnA/?igsh=MTFheHFvdDByOGlyeQ==',
      title: 'Inicios de HTML',
      description: 'HTML fue creado a principios de los años 90 por Tim Berners-Lee, un científico británico que trabajaba en el CERN (Organización Europea para la Investigación Nuclear). Su objetivo era desarrollar un lenguaje simple que permitiera compartir documentos y enlaces entre computadoras en diferentes lugares del mundo. La primera versión de HTML era muy básica: servía principalmente para dar estructura a textos y enlaces, lo que permitió que la World Wide Web comenzara a crecer y que los documentos pudieran ser consultados fácilmente a través de navegadores. Con el tiempo, HTML fue evolucionando, incorporando imágenes, tablas, formularios y más etiquetas, hasta convertirse en el lenguaje fundamental de la web moderna.'
    },
    { 
      id: 5, 
      embedUrl: 'DTwHcexEZYl',
      url: 'https://www.instagram.com/reel/DTwHcexEZYl/?igsh=MXgxcDB5MzZla2g1Yg==',
      title: 'La WWW y su funcionamiento en Internet',
      description: 'La WWW (World Wide Web) es la parte del Internet que permite acceder y navegar por páginas web mediante navegadores como Chrome, Firefox o Safari. Fue inventada por Tim Berners-Lee en 1989 y revolucionó la forma en que consultamos información y compartimos contenidos en la red. En conjunto, la WWW funciona como un sistema dinámico: el cliente solicita información a través del navegador, la red transporta la solicitud, el servidor responde con los datos y la WWW los presenta de forma organizada y accesible para el usuario.'
    },
    { 
      id: 6, 
      embedUrl: 'DTwHpF6kdc1',
      url: 'https://www.instagram.com/reel/DTwHpF6kdc1/?igsh=MWR0aG1hemY5a3F1MA==',
      title: '¿Qué es CSS en HTML?',
      description: 'CSS, que significa Cascading Style Sheets (Hojas de Estilo en Cascada), es un lenguaje que se utiliza junto con HTML para dar estilo y diseño a las páginas web. Mientras que HTML se encarga de la estructura y el contenido (textos, imágenes, enlaces), CSS define cómo se ve ese contenido, como colores, fuentes, tamaños, márgenes y posiciones. Gracias a CSS, los desarrolladores pueden crear páginas visualmente atractivas y uniformes, separar el contenido de la presentación y aplicar cambios de diseño de manera rápida y consistente en todo un sitio web. Por ejemplo, con CSS puedes cambiar el color de todos los títulos de una página sin modificar cada uno individualmente en el HTML.'
    },
    { 
      id: 7, 
      embedUrl: 'DTwHzU4kRu9',
      url: 'https://www.instagram.com/reel/DTwHzU4kRu9/?igsh=MXgwOWV0NTZrMHBuaA==',
      title: '¿Qué es React?',
      description: 'React es una librería de JavaScript creada por Facebook que se utiliza para construir interfaces de usuario interactivas en aplicaciones web y móviles. Su objetivo es facilitar la creación de componentes reutilizables, lo que permite que los desarrolladores construyan aplicaciones rápidas, eficientes y fáciles de mantener. Con React, en lugar de actualizar toda la página web cada vez que cambia algo, se actualizan solo los componentes necesarios, mejorando el rendimiento y la experiencia del usuario. Además, React se combina con otras herramientas y librerías para crear aplicaciones completas y modernas, siendo muy popular en proyectos de todo tipo, desde sitios web hasta apps móviles con React Native.'
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
