import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form'
import ListadoVeterinarios from "./ListadoVeterinarios";
import {alta, baja, modificacion, consulta} from "./VeterinariosServices"
import ModificarVeter from "./ModificarVeterinario"

export default function Veterinarios(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);

    const [ventanaModificacionVisible, setVentanaModificacionVisible] = useState(false);
    const [veterinarioSeleccionado, setVeterinarioSeleccionado] = useState(null);

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
        
    const borrar = async function(legajo) {
        await baja(legajo);
        const res = await consulta({});
        setLista(res.data);
    }

    const modificar = async function(data){
        await modificacion(data)
        cerrarVentanaModificacion();
        const res = await consulta({});
        setLista(res.data);

    }


    const abrirVentanaModificacion = (veterinario) => {
        setVeterinarioSeleccionado(veterinario);
        setVentanaModificacionVisible(true);
    };
    
    const cerrarVentanaModificacion = () => {
        setVentanaModificacionVisible(false);
    };

    return(
        <div className="container">
            <h1>Veterinarios</h1>
            <hr/>


            <div>
                <div className="card mb-3">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title text-center">
                            BUSCAR VETERINARIO
                        </h2>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">Legajo: </label>
                            <input type="text" className="form-control" {...register('legajo')} />
                        </div>
                        <button type="submit" className="btn btn-primary" >
                        Buscar
                        </button>
                    </form>
                    </div>
                </div>
                {lista && <ListadoVeterinarios lista={lista} borrar={borrar} modificar={modificacion} abrirVentanaModificacion={abrirVentanaModificacion}/>}
                <button className="btn btn-primary mx-auto d-block btn-lg" onClick={alta}>Registrar un Nuevo Veterinario</button>
            </div>
            <hr/>
            {ventanaModificacionVisible && <ModificarVeter veterinario={veterinarioSeleccionado} modificar={modificar} cerrarVentanaModificacion={cerrarVentanaModificacion} />}
        </div>

    )
}
