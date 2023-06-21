import { useForm } from "react-hook-form";

export default function ModificarVeterinario({ veterinario, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)
    };

    return (
    <form onSubmit={handleSubmit(onSubmit) } className="card p-3">
        <h2 className="form-title text-center">
            MODIFICAR VETERINARIO
        </h2>

        <label className="form-label">Legajo:</label>
        <input type="text" defaultValue={veterinario.Legajo} {...register("Legajo")} />

        <label className="form-label">Nombre:</label>
        <input type="text" className="form-control" defaultValue={veterinario.Nombre} {...register("Nombre")} />

        <label className="form-label">Matricula:</label>
        <input type="text" className="form-control" defaultValue={veterinario.Matricula} {...register("Matricula")} />

        <label className="form-label">Fecha Registro:</label>
        <input type="text" className="form-control" defaultValue={veterinario.FechaRegistro} {...register("FechaRegistro")} />

        <label className="form-label">Celular:</label>
        <input type="text" className="form-control" defaultValue={veterinario.Celular} {...register("Celular")} />

        <br />

        <button type="submit" className="btn btn-secondary m-1" >
        Guardar
        </button>
        <button type="button" className="btn btn-secondary m-1" onClick={cerrarVentanaModificacion}>
        Volver
        </button>
    </form>
    );
}