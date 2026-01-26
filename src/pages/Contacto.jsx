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
    
    // Validación estricta del correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor ingresa una dirección de correo completa y válida (ejemplo: usuario@dominio.com)');
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
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Ingresa una dirección de correo completa (ejemplo: usuario@dominio.com)"
                placeholder="usuario@dominio.com"
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
