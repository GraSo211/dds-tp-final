import React from 'react';

const ListadoVeterinarios = ({ lista }) => {
  console.log(lista)
  return (
    
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Legajo</th>
            <th>Nombre</th>
            <th>Matricula</th>
            <th>Fecha Registro</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.legajo}>
              <td>{item.legajo}</td>
              <td>{item.nombre}</td>
              <td>{item.matricula}</td>
              <td>{item.fechaRegistro}</td>
              <td>{item.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoVeterinarios;
