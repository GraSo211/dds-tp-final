import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';



import Animales from './components/animales/Animales'

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
              <Route path="/veterinario" element={<Veterinarios />} />
              <Route path="/animales" element={<Animales />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
