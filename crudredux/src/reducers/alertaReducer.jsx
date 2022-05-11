import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

const initialState = {
    alerta:null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state, 
                alerta: action.payload
            }
            break;
        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: null
            }
            break;
    
        default:
            return state;
    }
}