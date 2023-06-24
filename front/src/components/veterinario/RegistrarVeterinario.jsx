import React from "react";  
import {useForm} from 'react-hook-form';

export default function RegistrarVeterinario({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){  
      
    const { register, handleSubmit, formState:{errors} } = useForm();  
    
    
    const onSubmit= (data)=>{  
        alta(data);  
        alert(`El Legajo ${data.legajo} ha sido creado con éxito`);  
    }

    return (  
        <div ref={ventanaRegistrarRef} className="mt-3">   
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >  
                <h2  className="form-title text-center">  
                    REGISTRAR VETERINARIO  
                </h2>

                <label className="form-label">Legajo:</label>          
                <input type="text" className="form-control" defaultValue={""} {...register("legajo", {required:true, pattern: /^\d{4,}$/})} />  
                {errors.legajo && errors.legajo.type === "pattern" && (<p className="text-danger">El campo debe tener como minimo 4 números.</p>)}

                <label className="form-label">Apellido Nombre:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("nombre",{required:true, pattern:  /^[a-zA-Z]{5,}\s[a-zA-Z]{5,}$/ })} />  
                {errors.nombre && errors.nombre.type === "pattern" && (<p className="text-danger">El campo debe ser "Apellido Nombre" de minimo 5 caracteres cada uno.</p>)}

                <label className="form-label">Matricula:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("matricula", {required:true, pattern: /^[a-zA-Z]{2}\d{4}$/})}/>  
                {errors.matricula && errors.matricula.type === "pattern" && (<p className="text-danger">El campo debe ser AlfaNumérico de formato "Mcxxxx".</p>)}

                <label className="form-label">Fecha Registro:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("fechaRegistro", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>  
                {errors.fechaRegistro && errors.fechaRegistro.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

                <label className="form-label">Celular:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("celular", {required:true, pattern: /^\d{9,10}$/})}/>  
                {errors.celular && errors.celular.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico de entre 9 y 10.</p>)}  
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