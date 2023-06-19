import FilaAnimal from "./FilaAnimal";

export default function ListadoAnimales({lista, borrar, modificar}){


    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo de Animal</th>
                        <th>Id Dueño</th>
                        <th>Nombre</th>
                        <th>Fecha Nacimiento</th>
                        <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((animal)=>(

                        <FilaAnimal lista={animal} borrar={borrar} modificar={modificar}/>
                    ))}

                

                </tbody>
            </table>
        </div>
    )
}