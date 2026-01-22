import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto';
import DandyHats from './pages/DandyHats';
import Framework from './pages/Framework';
import Metodologias from './pages/Metodologias';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import './App.css';

function App() {
  return (
    <Router basename="/Proyecto-zivic">
      <Routes>
        <Route path="/" element={<Contacto />} />
        <Route path="/dandy-hats" element={<DandyHats />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/metodologias" element={<Metodologias />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </Router>
  );
}

export default App;
