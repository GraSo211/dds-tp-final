import React, {useState, useEffect, useRef} from "react";
import {useForm} from 'react-hook-form'
import ListadoVeterinarios from "./ListadoVeterinarios";
import {alta, baja, modificacion, consulta} from "./VeterinariosServices";
import RegistrarVeter from "./RegistrarVeterinario";
import ModificarVeterinario from "./ModificarVeterinario";

export default function Veterinarios(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [veterSeleccionado, setVeterSeleccionado] = useState(null);

    const ventanaRegistrarRef = useRef(null);
    const [ventanaRegistrarVisible, setVentanaRegistrarVisible] = useState(false);

    const [ventanaModificacionVisible, setVentanaModificacionVisible] = useState(false);
    const ventanaModificacionRef = useRef(null);

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


    useEffect(() => {
        if (ventanaRegistrarVisible) {
            ventanaRegistrarRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ventanaRegistrarVisible]);


    useEffect(() => {
        if (!ventanaModificacionVisible) {
            setVeterSeleccionado(null);
        }
    }, [ventanaModificacionVisible]);

    useEffect(() => {
        if (ventanaModificacionVisible) {
            ventanaModificacionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ventanaModificacionVisible]);

    const onSubmit = async (data) => {
        try {
                const res = await consulta(data)
                setLista(res.data);
            
        } catch (error) {
            console.error(error);
        }
    };
    const registrar = async function(data){
        await alta(data);
        cerrarVentanaRegistrar();
        const res = await consulta({});
        setLista(res.data);
    }
        
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

    const abrirVentanaRegistrar = (veter) => {
        setVentanaRegistrarVisible(true);
        setVentanaModificacionVisible(false);
    };

    const cerrarVentanaRegistrar = () => {
        setVentanaRegistrarVisible(false);
    };


    const abrirVentanaModificacion = (veter) => {
        if(!ventanaRegistrarVisible){
            setVeterSeleccionado(veter);
            setVentanaModificacionVisible(true);
        } else {               
            setVeterSeleccionado(veter);
            setVentanaModificacionVisible(true)
        }
        
        setVentanaRegistrarVisible(false);
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
                <button className="btn btn-primary mx-auto d-block btn-lg" onClick={abrirVentanaRegistrar}>Registrar un Nuevo Veterinario</button>
            </div>
            <hr/>
            {ventanaRegistrarVisible && <RegistrarVeter ventanaRegistrarRef={ventanaRegistrarRef} cerrarVentanaRegistrar={cerrarVentanaRegistrar} alta={registrar}/>}
            
            {ventanaModificacionVisible && <ModificarVeterinario ventanaModificacionRef={ventanaModificacionRef} veter={veterSeleccionado} modificar={modificar} cerrarVentanaModificacion={cerrarVentanaModificacion} />}
        </div>

    )
}
