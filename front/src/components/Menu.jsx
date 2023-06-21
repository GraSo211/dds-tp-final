import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

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
              <Dropdown>
                <Dropdown.Toggle as={NavLink} to="/veterinario" id="veterinarioDropdown" className="nav-link">
                  Veterinario
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/veterinario/buscar">Buscar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/veterinario/modificar">Modificar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/veterinario/borrar">Borrar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/veterinario/crear">Crear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
            <Dropdown>
                <Dropdown.Toggle as={NavLink} to="/animales" id="animalesDropdown" className="nav-link">
                  Animal
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/animales/buscar">Buscar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/animales/modificar">Modificar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/animales/borrar">Borrar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/animales/crear">Crear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
            <Dropdown>
                <Dropdown.Toggle as={NavLink} to="/clientes" id="clientesDropdown" className="nav-link">
                  Clientes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/clientes/buscar">Buscar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/clientes/modificar">Modificar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/clientes/borrar">Borrar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/clientes/crear">Crear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
            <Dropdown>
                <Dropdown.Toggle as={NavLink} to="/consulta" id="consultaDropdown" className="nav-link">
                  Consultas
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/consulta/buscar">Buscar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/consulta/modificar">Modificar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/consulta/borrar">Borrar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/consulta/crear">Crear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
            <Dropdown>
                <Dropdown.Toggle as={NavLink} to="/alimento" id="alimentoDropdown" className="nav-link">
                  Alimentos
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/alimento/buscar">Buscar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/alimento/modificar">Modificar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/alimento/borrar">Borrar</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/alimento/crear">Crear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu };
