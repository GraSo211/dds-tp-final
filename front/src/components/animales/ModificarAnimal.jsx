import { useForm } from "react-hook-form";

export default function ModificarAnimal({ animal, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)
    };

    return (
    <form onSubmit={handleSubmit(onSubmit) } className="card p-3">
        <h2 className="form-title text-center">
            MODIFICAR ANIMAL
        </h2>

        <input type="hidden" defaultValue={animal.IdAnimal} {...register("IdAnimal")} />

        <label className="form-label">Tipo de Animal:</label>
        <input type="text" className="form-control" defaultValue={animal.IdTipoAnimal} {...register("IdTipoAnimal")} />

        <label className="form-label">Dueño:</label>
        <input type="text" className="form-control" defaultValue={animal.IdCliente} {...register("IdCliente")} />

        <label className="form-label">Nombre Animal:</label>
        <input type="text" className="form-control" defaultValue={animal.NombreAnimal} {...register("NombreAnimal")} />

        <label className="form-label">Fecha de Nacimiento:</label>
        <input type="text" className="form-control" defaultValue={animal.FechaNacAnimal} {...register("FechaNacAnimal")} />

        <label className="form-label">Peso:</label>
        <input type="text" className="form-control" defaultValue={animal.Peso} {...register("Peso")} />
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