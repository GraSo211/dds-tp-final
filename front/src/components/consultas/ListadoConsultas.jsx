import FilaConsulta from "./FilaConsulta";

export default function ListadoConsultas({lista, borrar, abrirVentanaModificacion }){

    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                    <td>IdConsulta</td>
                    <td>Fecha</td>
                    <td>Observación</td>
                    <td>Precio</td>
                    <td>IdMascota</td>
                    <td>IdCliente</td>
                    <td>LegajoVeter</td>
                    </tr>
                </thead>
                <tbody>
                    {lista && lista.map((consulta)=>(

                        <FilaConsulta key={consulta.IdConsulta} lista={consulta} 
                        borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}