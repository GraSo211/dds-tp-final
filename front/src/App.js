import "./App.css";
import { Menu } from "./componentes/Menu";
import { Inicio } from "./componentes/Inicio";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />

            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
