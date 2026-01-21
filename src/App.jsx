import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto';
import DandyHats from './pages/DandyHats';
import Framework from './pages/Framework';
import Metodologias from './pages/Metodologias';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacto />} />
        <Route path="/dandy-hats" element={<DandyHats />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/metodologias" element={<Metodologias />} />
      </Routes>
    </Router>
  );
}

export default App;
