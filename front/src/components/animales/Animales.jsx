import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form'

import ListadoAnimales from "./ListadoAnimales";
import {alta, baja, modificacion, consulta} from "./AnimalesServices"
export default function Animales(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const res = await consulta({});
                setLista(res.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        obtenerDatos();
    }, []);
    

    const onSubmit = async (data) => {
        try {
                const res = await consulta(data)
                setLista(res.data);
            
        } catch (error) {
            console.error(error);
        }
    };
        
    const borrar = async function(id) {
        alert(await baja(id))
        const res = await consulta({});
        setLista(res.data);
    }






    return(
        <div className="container">
            <h1>Animales</h1>
            <hr/>


            <div>
                <div className="card mb-3">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title text-center">
                            BUSCAR ANIMAL
                        </h2>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">Nombre de la Mascota: </label>
                            <input type="text" className="form-control" {...register('NombreAnimal')} />
                        </div>
                        <button type="submit" className="btn btn-primary" >
                        Buscar
                        </button>
                    </form>
                    </div>
                </div>
                {lista && <ListadoAnimales lista={lista} borrar={borrar} modificar={modificacion}/>}
                <button className="btn btn-primary mx-auto d-block btn-lg">Registrar un Nuevo Animal</button>
            </div>
            <hr/>









            









            {/*<div>
                {visibleDarDeBaja ? (
                    <button  className="btn btn-primary" onClick={ocultarBotonDarDeBaja}>Dar de Baja un Animal</button>
                ) : (
                    <div className="card mb-3">
                        <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="form-title text-center">
                                ELIMINAR ANIMAL DEL SISTEMA
                            </h2>
                            <hr/>
                                
                            
                            <div className="mb-3">
                                <label className="form-label">Nombre de la Mascota: </label>
                                <input type="text" className="form-control" {...register('NombreAnimal')} />
                            </div>
                            <button type="submit" className="btn btn-primary" >
                            Buscar
                            </button>
                        </form>
                        </div>
                        {lista && <ListadoAnimales lista={lista}/>}
                    </div>
                )}
                
            </div>*/}                

        </div>

    )
}