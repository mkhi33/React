import  { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO


} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario:true
            }
            break;
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos:action.payload
            }
            break;
        
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorFormulario: false
            }
            break;

        case VALIDAR_FORMULARIO:
            return {
                ...state, 
                errorFormulario: true
            }
            break;
    
        case PROYECTO_ACTUAL:

            return {
                ...state,
                proyecto: state.proyectos.filter( proyecto => proyecto.id === action.payload)
            }
            break;

        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter( proyecto => proyecto.id !== action.payload),
                proyecto: null

            }

            break;

        default:
            return state;
    }
}