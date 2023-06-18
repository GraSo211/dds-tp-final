import React, {useState} from "react";
import {useForm} from 'react-hook-form'
import axios from "axios";
import ListadoAnimales from "./ListadoAnimales";

export default function Animales(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [visibleConsultar, setVisibleConsultar] = useState(true);
    //const [visibleDarDeBaja, setVisibleDarDeBaja] = useState(true);
    //const [visibleModificar, setVisibleModificar] = useState(true);
    //const [visibleCrear, setVisibleCrear] = useState(true);
    //const [ocultarCampos, setOcultarCampos] = useState(false);


    const onSubmit = async (data) => {
        try {
            const response = await axios.get('http://localhost:3500/api/animales', {
                params: data,
            });

            console.log(response.data);

            setLista(response.data);
        } catch (error) {
            console.error(error);
        }
    };







    const ocultarBotonConsultar = () => {
        setVisibleConsultar(false);
        //setVisibleDarDeBaja(true);
        //setVisibleModificar(true);
        //setVisibleCrear(true);
    };


    return(
        <div className="container">
            <h1>Animales</h1>
            <hr/>
            <div>
                {visibleConsultar ? (

                    <button className="btn btn-primary" onClick={ocultarBotonConsultar}>
                        Consultar un Animal
                    </button>

                    ) : (

                    <div className="card mb-3">
                        <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Nombre de la Mascota: </label>
                                <input type="text" className="form-control" {...register('NombreAnimal')} />
                            </div>
                            <button type="submit" className="btn btn-primary" >
                            Buscar
                            </button>
                        </form>
                        </div>
                        {lista && <ListadoAnimales lista={lista} />}
                    </div>

                )}
            </div>








            <hr/>
            <button  className="btn btn-primary">Registrar un Animal</button>
            <hr/>
            <button  className="btn btn-primary">Dar de Baja un Animal</button>
            <hr/>
            <button  className="btn btn-primary">Modificar un Animal</button>
        </div>

    )
}
