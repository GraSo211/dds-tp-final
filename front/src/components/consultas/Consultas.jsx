import React, {useState, useEffect, useRef} from "react";
import {useForm} from 'react-hook-form'
import ListadoConsultas from "./ListadoConsultas";
import {alta, baja, modificacion, consulta} from "./ConsultasServices";
import RegistrarConsulta from "./RegistrarConsulta.jsx";
import ModificarConsulta from "./ModificarConsulta";

export default function Consultas(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [ConsultaSeleccionada, setConsultaSeleccionada] = useState(null);

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
            setConsultaSeleccionada(null);
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
        
    const borrar = async function(IdConsulta) {
        await baja(IdConsulta);
        const res = await consulta({});
        setLista(res.data);
    }

    const modificar = async function(data){
        await modificacion(data)
        cerrarVentanaModificacion();
        const res = await consulta({});
        setLista(res.data);
    }

    const abrirVentanaRegistrar = (Consulta) => {
        setVentanaRegistrarVisible(true);
        setVentanaModificacionVisible(false);
    };

    const cerrarVentanaRegistrar = () => {
        setVentanaRegistrarVisible(false);
    };


    const abrirVentanaModificacion = (Consulta) => {
        if(!ventanaRegistrarVisible){
            console.log(Consulta)
            setConsultaSeleccionada(Consulta);
            setVentanaModificacionVisible(true);
        } else {               
            setConsultaSeleccionada(Consulta);
            setVentanaModificacionVisible(true)
        }
        
        setVentanaRegistrarVisible(false);
    };
    
    const cerrarVentanaModificacion = () => {
        setVentanaModificacionVisible(false);
    };


    return(
        <div className="container">
            <h1>Consultas</h1>
            <hr/>


            <div>
                <div className="card mb-3">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title text-center">
                            BUSCAR CONSULTA
                        </h2>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">IdConsulta: </label>
                            <input type="text" className="form-control" {...register('IdConsulta')} />
                        </div>
                        <button type="submit" className="btn btn-primary" >
                        Buscar
                        </button>
                    </form>
                    </div>
                </div>
                {lista && <ListadoConsultas lista={lista} borrar={borrar} modificar={modificacion} abrirVentanaModificacion={abrirVentanaModificacion}/>}
                <button className="btn btn-primary mx-auto d-block btn-lg" onClick={abrirVentanaRegistrar}>Registrar una Nueva Consulta</button>
            </div>
            <hr/>
            {ventanaRegistrarVisible && <RegistrarConsulta ventanaRegistrarRef={ventanaRegistrarRef} cerrarVentanaRegistrar={cerrarVentanaRegistrar} alta={registrar}/>}
            
            {ventanaModificacionVisible && <ModificarConsulta ventanaModificacionRef={ventanaModificacionRef} consulta ={ConsultaSeleccionada} modificar={modificar} cerrarVentanaModificacion={cerrarVentanaModificacion} />}
        </div>

    )
}
