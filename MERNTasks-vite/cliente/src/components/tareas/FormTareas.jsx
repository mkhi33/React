import {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTareas = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        placeholder="Nombre Tarea..."
                        value="Agregar Tarea"
                    />
                </div>


            </form>
        </div>
    )
}

export default FormTareas;

