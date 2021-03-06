import { CategoriasContext } from "../context/CategoriasContext"
import { useContext } from "react"
const Formulario = () => {
    const { categorias } = useContext(CategoriasContext);
    return (
        <form
            className="col-md-12"
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categorías o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar Por Ingrediente"
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map( categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                     />
                </div>
            </div>
        </form>
    )
}

export default Formulario
