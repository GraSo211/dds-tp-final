import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';

import Veterinario from './components/Veterinario';

import Animales from './components/Animales'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/veterinario" element={<Veterinario />} />

              <Route path="/animales" element={<Animales />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
