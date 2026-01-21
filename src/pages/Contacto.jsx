import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado!\nNombre: ${formData.nombre}\nEmail: ${formData.email}`);
    setFormData({ nombre: '', email: '', password: '' });
  };

  return (
    <div className="page-container">
      <Header />
      <main className="contacto-main">
        <div className="contacto-container">
          <h1>Formulario de Contacto</h1>
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
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
