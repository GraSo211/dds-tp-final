import { useForm } from "react-hook-form";

export default function ModificarVeterinario({ventanaModificacionRef, veter, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)  
    };

    return (
    <div ref={ventanaModificacionRef} className="mt-3"> 
        <form  onSubmit={handleSubmit(onSubmit) } className="card p-3" >
            <h2  className="form-title text-center">
                MODIFICAR VETERINARIO
            </h2>
            <label className="form-label">Legajo:</label>        
            <input type="text" className="form-control" defaultValue={veter.legajo} {...register("legajo", {required:true, pattern: /^\d{4,}$/})} />
            {errors.legajo && errors.legajo.type === "pattern" && (<p className="text-danger">El campo debe tener como minimo 4 números.</p>)}

            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" defaultValue={veter.nombre} {...register("nombre",{required:true, pattern:  /^[a-zA-Z]+(\s[a-zA-Z]+)?$/ })} />
            {errors.nombre && errors.nombre.type === "pattern" && (<p className="text-danger">El campo debe ser Texto.</p>)}

            <label className="form-label">Matricula:</label>
            <input type="text" className="form-control" defaultValue={veter.matricula} {...register("matricula", {required:true, pattern: /^[a-zA-Z]{2}\d{4}$/})}/>
            {errors.matricula && errors.matricula.type === "pattern" && (<p className="text-danger">El campo debe ser AlfaNumérico.</p>)}

            <label className="form-label">Fecha Registro:</label>
            <input type="text" className="form-control" defaultValue={new Date(veter.fechaRegistro).toISOString().split('T')[0]} {...register("fechaRegistro", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>
            {errors.fechaRegistro && errors.fechaRegistro.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

            <label className="form-label">Celular:</label>
            <input type="text" className="form-control" defaultValue={veter.celular} {...register("celular", {required:true, pattern: /^\d{9,10}$/})}/>
            {errors.celular && errors.celular.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico de entre 9 y 10.</p>)}
            <br />

            <button type="submit" className="btn btn-secondary m-1" >
            Guardar
            </button>
            <button type="button" className="btn btn-secondary m-1" onClick={cerrarVentanaModificacion}>
            Volver
            </button>


        </form>
    </div>   
    );
}