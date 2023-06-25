import React from "react";
import { NavLink } from "react-router-dom";
import {  } from "react-bootstrap";
import './custom.scss';

function Menu() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md 
     square border-bottom border-2 mb-3">
      <div className="container-fluid mt-3">
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
          <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/inicio">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
                <NavLink to="/veterinario" id="veterinario" className="nav-link">
                  Veterinario
                </NavLink>
            </li>
            <li className="nav-item fw-bold">
                <NavLink to="/animales" id="animales" className="nav-link">
                  Animal
                </NavLink>
            </li>
            <li className="nav-item fw-bold">
                <NavLink to="/clientes" id="clientes" className="nav-link">
                  Clientes
                </NavLink>
            </li>
            <li className="nav-item fw-bold">
                <NavLink to="/consultas" id="consulta" className="nav-link">
                  Consultas
                </NavLink>
            </li>
            <li className="nav-item fw-bold">
                <NavLink to="/alimento" id="alimento" className="nav-link">
                  Alimentos
                </NavLink>
            </li>
          </ul>
          <div className="ms-auto fw-bold d-flex">
            <h4 className="text-light">Clinica Veterinaria</h4>
            <img src="../logoVeterinaria.png" className="ms-3 me-5" height={30} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Menu };
