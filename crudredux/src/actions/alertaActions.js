import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types'

// Muestra alerta

export function mostrarAlertaAction( alerta ) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) )
    } 
}

const crearAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

// Ocultar la alerta

export function ocultarALertaAction() {
    return ( dispatch ) => {
        dispatch( ocultarAlerta() )
    }
}

const ocultarAlerta = ( ) => ({
    type: OCULTAR_ALERTA
})