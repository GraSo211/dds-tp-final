import React from "react";
import { NavLink } from "react-router-dom";
import {  } from "react-bootstrap";

function Menu() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <NavLink className="nav-link" to="/inicio">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/veterinario" id="veterinario" className="nav-link">
                  Veterinario
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/animales" id="animales" className="nav-link">
                  Animal
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/clientes" id="clientes" className="nav-link">
                  Clientes
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/consultas" id="consulta" className="nav-link">
                  Consultas
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/alimento" id="alimento" className="nav-link">
                  Alimentos
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu };
