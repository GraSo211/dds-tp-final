import FilaVeterinario from "./FilaVeterinario";

export default function ListadoVeterinarios({lista, borrar, abrirVentanaModificacion }){

    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                    <td>Legajo</td>
                    <td>Nombre</td>
                    <td>Matricula</td>
                    <td>FechaRegistro</td>
                    <td>Celular</td>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((veterinario)=>(

                        <FilaVeterinario key={veterinario.legajo} lista={veterinario} 
                        borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}