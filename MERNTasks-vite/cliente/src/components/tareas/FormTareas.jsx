import {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { generarId } from '../../helpers';
const FormTareas = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    // Obtener las función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;


    // Efect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada != null){
            guardarTarea(tareaseleccionada);
        }else {
            guardarTarea({
                nombre: ''
            })
        }

    }, [tareaseleccionada])

    // State del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    })

    // Extraer el nombre del proyecto
    const { nombre } = tarea;


    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;


    const onSubmit = e => {
        e.preventDefault();
        // Validar

        if([nombre].includes('')){
            validarTarea()
            return;
        }

        //Si es edición o es nueva tarea
        if(tareaseleccionada === null){
            // Agregar la nueva tarea al state de tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            tarea.id = generarId()
            agregarTarea(tarea)
            
        }else {
            // Editar la tarea seleccionada
            actualizarTarea(tarea)

            // Elimina la tarea seleccionada del state
            limpiarTarea();
        }
            // Obtener y filtrar las tareas del proyecto actual
            obtenerTareas(proyectoActual.id)

            // Reiniciar el form
            guardarTarea({
                nombre: ''
            })


    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        placeholder="Nombre Tarea..."
                        value={tareaseleccionada ? 'Editar Tarea': 'Agregar Tarea'}
                    />
                </div>


            </form>

            { errortarea && (<p className='mensaje error'>El nombre de la tarea es obligatorio</p>)}
        </div>
    )
}

export default FormTareas;

