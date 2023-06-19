export default function FilaAnimal({lista, borrar, modificar}){
    const { IdAnimal, IdTipoAnimal, IdCliente, NombreAnimal, FechaNacAnimal, Peso } = lista;

    return(
        <>
            <tr key={IdAnimal} onClick={()=>{borrar(IdAnimal)}}>
                <td>{IdAnimal}</td>
                <td>{IdTipoAnimal}</td>
                <td>{IdCliente}</td>
                <td>{NombreAnimal}</td>
                <td>{FechaNacAnimal}</td>
                <td>{Peso}</td>
            </tr>
            
        </>

    );
};