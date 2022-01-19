import { useReducer } from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { 
            TAREAS_PROYECTO,
            AGREGAR_TAREA,
            VALIDAR_TAREA,
            ELIMINAR_TAREA,
            ESTADO_TAREA,
            TAREA_ACTUAL,
            ACTUALIZAR_TAREA,
            LIMPIAR_TAREA

        } from '../../types'

const TareaState = props => {
    // 1- Definir el state inicial
    const initialState = {
        tareas: [
            {id:1,nombre:"Elegir plataforma 1", estado:true, proyectoId: 1},
            {id:2,nombre:"Elegir Colores 2", estado:false, proyectoId: 2},
            {id:3,nombre:"Elegir Plataformas de pago 3", estado:false, proyectoId: 3},
            {id:4,nombre:"Elegir Hosting 4 ", estado:true, proyectoId: 4},
            {id:5,nombre:"Elegir plataforma 5", estado:true, proyectoId: 1},
            {id:6,nombre:"Elegir Colores 6", estado:false, proyectoId: 2},
            {id:7,nombre:"Elegir Plataformas de pago 7", estado:false, proyectoId: 3},
            {id:8,nombre:"Elegir Hosting 8", estado:true, proyectoId: 4},
            {id:9,nombre:"Elegir plataforma 9", estado:true, proyectoId: 1},
            {id:10,nombre:"Elegir Colores 10", estado:false, proyectoId: 2},
            {id:11,nombre:"Elegir Plataformas de pago 11", estado:false, proyectoId: 3},
            {id:12,nombre:"Elegir Hosting 12", estado:true, proyectoId: 4},
            {id:13,nombre:"Elegir Hosting 13", estado:true, proyectoId: 3},
        ],

        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y el state
    const [ state, dispatch ] = useReducer( TareaReducer, initialState );

    // crear las funciones

    // Crear las tareas de un proyecto



    // Obtener las tareas al proyecto seleccionado
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar tareas al proyecto seleccionado

    const agregarTarea = tarea => {
        
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario 

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,

        })
    }

    // Cambiar el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Editar o modificar una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload:tarea
        })
    }
    // Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })

    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
