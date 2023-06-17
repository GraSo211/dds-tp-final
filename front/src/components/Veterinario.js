import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ListadoVeterinarios from './ListadoVeterinario';

const Veterinario = () => {
  const { register, handleSubmit } = useForm();

  const [lista, setLista] = useState(null);
  const [visibleConsultar, setVisibleConsultar] = useState(true);
  const [visibleDarDeBaja, setVisibleDarDeBaja] = useState(true);
  const [visibleModificar, setVisibleModificar] = useState(true);
  const [visibleCrear, setVisibleCrear] = useState(true);
  const [ocultarCampos, setOcultarCampos] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:3500/api/veterinarios', {
        params: data,
      });

      console.log(response.data);

      setLista(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ocultarBotonConsultar = () => {
    setVisibleConsultar(false);
    setVisibleDarDeBaja(true);
    setVisibleModificar(true);
    setVisibleCrear(true);
  };

  const ocultarBotonDarDeBaja = () => {
    setVisibleConsultar(true);
    setVisibleDarDeBaja(false);
    setVisibleModificar(true);
    setVisibleCrear(true);
  };

  const ocultarBotonModificar = () => {
    setVisibleConsultar(true);
    setVisibleDarDeBaja(true);
    setVisibleModificar(false);
    setVisibleCrear(true);
  };

  const ocultarBotonCrear = () => {
    setVisibleConsultar(true);
    setVisibleDarDeBaja(true);
    setVisibleModificar(true);
    setVisibleCrear(false);
  };

  const mostrarTodos = () => {
    setVisibleConsultar(true);
    setVisibleDarDeBaja(true);
    setVisibleModificar(true);
    setVisibleCrear(true);
  };

  

  return (
    <div className="container">
      <h1>Veterinarios</h1>
      <hr />
      <div>
        {visibleConsultar ? (
          <button className="btn btn-primary" onClick={ocultarBotonConsultar}>
            Consultar
          </button>
        ) : (
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Legajo: </label>
                  <input type="text" className="form-control" {...register('legajo')} />
                </div>
                <button type="submit" className="btn btn-primary">
                  Buscar
                </button>
              </form>
            </div>
            {lista && <ListadoVeterinarios lista={lista} />}
          </div>
        )}
      </div>
      <hr />
      <div>
        {visibleDarDeBaja ? (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={ocultarBotonDarDeBaja}
          >
            Dar De Baja
          </button>
        ) : (
          <div className="card mb-3">
            <div className="card-body">
              {!ocultarCampos && (
                <div className="mb-3">
                  <label className="form-label">Legajo: </label>
                  <input type="text" className="form-control" {...register('legajo')} />
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Borrar
              </button>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div>
        {visibleModificar ? (
          <button className="btn btn-primary" onClick={ocultarBotonModificar}>
            Modificar
          </button>
        ) : (
          <div className="card mb-3">
            <div className="card-body">
              <div>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Legajo: </label>
                      <input type="text" className="form-control" {...register('legajo')} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Buscar Legajo
                    </button>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Legajo: </label>
                      <input type="text" className="form-control" {...register('legajo')} />
                    </div>
                    {!ocultarCampos && (
                      <>
                        <label className="form-label">Nombre:</label>
                        <input type="text" className="form-control" {...register('nombre')} />
                        <label className="form-label">Matricula:</label>
                        <input type="text" className="form-control" {...register('matricula')} />
                        <label className="form-label">Celular:</label>
                        <input type="text" className="form-control" {...register('celular')} />
                        <br />
                        <button type="submit" className="btn btn-secondary">
                          Guardar
                        </button>
                      </>
                    )}
                  </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div>
        {visibleCrear ? (
          <button className="btn btn-primary" onClick={ocultarBotonCrear}>
            Crear Uno Nuevo
          </button>
        ) : (
          <div className="card mb-3">
            <div className="card-body">
              <div className="mb-3">
                <div>
                  <div>
                    <label className="form-label">Legajo: </label>
                    <input type="text" className="form-control" {...register('legajo')} />
                  </div>
                  <label className="form-label">Nombre:</label>
                  <input type="text" className="form-control" {...register('nombre')} />
                  <label className="form-label">Matricula:</label>
                  <input type="text" className="form-control" {...register('matricula')} />
                  <label className="form-label">Celular:</label>
                  <input type="text" className="form-control" {...register('celular')} />
                </div>
              </div>
              <button type="submit" className="btn btn-secondary">
                Crear
              </button>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="text-end">
        <button type="button" className="btn btn-secondary" onClick={mostrarTodos}>
          Atras
        </button>
      </div>
    </div>
  );
};

export default Veterinario;
