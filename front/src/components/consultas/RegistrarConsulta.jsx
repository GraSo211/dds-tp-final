import React from "react";
import {useForm} from 'react-hook-form';


export default function RegistrarConsulta({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){
    
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit= (data)=>{
        alta(data)
    }

    return (
        <div ref={ventanaRegistrarRef} className="mt-3"> 
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >
                <h2  className="form-title text-center">
                    REGISTRAR CONSULTA
                </h2>

                <label className="form-label">Fecha:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("Fecha",{required:true, pattern: /^\d{4}-\d{2}-\d{2}$/ })} />
                {errors.Fecha && errors.Fecha.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD hh:mm.</p>)}

                <label className="form-label">Observación:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("Observacion")}/>
                {errors.Observacion && errors.Observacion.type === "pattern" && (<p className="text-danger">El campo debe ser Texto.</p>)}

                <label className="form-label">Precio:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("Precio", {required:true, pattern: /^\d{1,4}\.\d{2}$/})}/>
                {errors.Precio && errors.Precio.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

                <label className="form-label">IdMascota:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("IdMascota", {required:true, pattern: /^\d{1,5}$/})}/>
                {errors.IdMascota && errors.IdMascota.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

                <label className="form-label">IdCliente:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("IdCliente", {required:true, pattern: /^\d{1,5}$/})}/>
                {errors.IdCliente && errors.IdCliente.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

                <label className="form-label">LegajoVeter:</label>
                <input type="text" className="form-control" defaultValue={""} {...register("LegajoVeter", {required:true, pattern: /^\d{4}$/})}/>
                {errors.LegajoVeter && errors.LegajoVeter.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico de 4 digitos</p>)}

                <br />

                <button type="submit" className="btn btn-secondary m-1" >
                Guardar
                </button>
                <button type="button" className="btn btn-secondary m-1" onClick={cerrarVentanaRegistrar}>
                Volver
                </button>


            </form>
        </div>  
        
    );

};