import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';

import Veterinario from './components/veterinario/Veterinarios';

import Animales from './components/animales/Animales'

import Consultas from './components/consultas/Consultas'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListadoVeterinarios from './components/veterinario/ListadoVeterinarios';
import Veterinarios from './components/veterinario/Veterinarios';

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/veterinario" element={<Veterinario />} />
              <Route path="/veterinario/buscar" element={<Veterinarios />} />

              <Route path="/animales" element={<Animales />} />

              <Route path="/consultas" element={<Consultas />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
