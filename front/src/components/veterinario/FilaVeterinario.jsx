import React from "react";

export default function FilaVeterinario({lista, borrar, abrirVentanaModificacion}){  
    const { legajo, nombre, matricula, fechaRegistro, celular } = lista;   

    return(  
        <>  
            <tr className="text-center" key={legajo}>  
                <td>{legajo}</td>  
                <td>{nombre}</td>  
                <td>{matricula}</td>  
                <td>{new Date(fechaRegistro).toISOString().split('T')[0]}</td>  
                <td>{celular}</td>  
                <td>  
                    <button className="btn primary-btn border m-1"   
                    onClick={()=> abrirVentanaModificacion(lista)}>✏️</button>  
                      
                    <button className="btn primary-btn border m-1"   
                    onClick={()=>{  
                        borrar(legajo);  
                        alert(`El Legajo ${legajo} ha sido borrado con éxito`);  
                    }}>❌</button>  
                </td>  
            </tr>

        </>

    );  
};  