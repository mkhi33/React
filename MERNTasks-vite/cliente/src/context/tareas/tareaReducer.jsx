
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

export default ( state, action ) => {
    console.log(action)
    switch (action.type) {
        case TAREAS_PROYECTO:

            return {
                ...state,
                tareasproyecto: state.tareas.filter( tarea => tarea.proyectoId === action.payload )
            }
            break;

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [action.payload,...state.tareas],
                errortarea: false
            }
            break;
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
            break;  

        case ELIMINAR_TAREA:

            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !==  action.payload)
            }
            break;
            case ACTUALIZAR_TAREA:
            case ESTADO_TAREA:
                
                return {
                    ...state,
                    tareas: state.tareas.map( tarea => tarea.id === action.payload.id ?  action.payload : tarea)

                }
    
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
            break;
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }

        default:
            return state;
    }
}