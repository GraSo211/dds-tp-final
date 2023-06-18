
export default function ListadoAnimales({lista}){

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
                        <tr key={animal.IdAnimal}>
                        <td>{animal.IdAnimal}.</td>
                        <td>{animal.IdTipoAnimal}</td>
                        <td>{animal.IdCliente}</td>
                        <td>{animal.NombreAnimal}</td>
                        <td>{new Date(animal.FechaNacAnimal).toISOString().split('T')[0]}</td>
                        <td>{animal.Peso}</td>
                    </tr>
                    ))}
                

                </tbody>
            </table>
        </div>
    )
}