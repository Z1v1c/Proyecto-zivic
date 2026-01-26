import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación estricta - solo correos de Gmail
    if (!formData.email.endsWith('@gmail.com')) {
      alert('El correo debe ser de Gmail (@gmail.com)');
      return;
    }
    
    // Verificar que haya algo antes del @gmail.com
    const username = formData.email.replace('@gmail.com', '');
    if (!username || username.length === 0) {
      alert('Por favor ingresa un correo completo (ejemplo: usuario@gmail.com)');
      return;
    }
    
    alert(`Formulario enviado!\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="page-container">
      <Header />
      <main className="contacto-main">
        <div className="contacto-container">
          <h1>Formulario de Contacto</h1>
          <p className="contact-intro">¿Tienes alguna pregunta o sugerencia? Completa el formulario y te responderemos pronto.</p>
          
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico (solo Gmail)</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern=".*@gmail\.com$"
                title="El correo debe ser de Gmail (@gmail.com)"
                placeholder="usuario@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Comentario
                
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
          
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
