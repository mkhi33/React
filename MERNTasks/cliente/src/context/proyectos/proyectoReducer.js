import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types';

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
    
        default:
            return state;
    }
}