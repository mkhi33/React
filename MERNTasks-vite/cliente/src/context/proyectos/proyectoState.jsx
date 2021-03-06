import React, {useReducer} from 'react';
import { generarId } from '../../helpers';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import  { 
            FORMULARIO_PROYECTO,
            OBTENER_PROYECTOS,
            AGREGAR_PROYECTO,
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL,
            ELIMINAR_PROYECTO
        } from '../../types';



const ProyectoState = props =>{

    const proyectos = [
        { id:1, nombre: 'tienda virtual' },
        { id:2, nombre: 'Intranet' },
        { id:3, nombre: 'Diseño de sitio web' },
        { id:4, nombre: 'MERN' }
    ];

    const initialState = {
        proyectos : [],
        formulario : false,
        errorFormulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = ()=> {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener proyectos

    const obtenerProyectos = () => {
         dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
         })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = generarId();
        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Validar el formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {

        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );


}

export default ProyectoState;

