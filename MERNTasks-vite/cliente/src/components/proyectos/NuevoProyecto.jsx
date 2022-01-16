import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;
    
    // State del proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre:''
    });

    // Extraer nombre del proyecto 
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = (e)=>{
        guardarProyecto({
            ...proyecto, 
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if([nombre].includes('')) {
            mostrarError(true);
            return;
        }
        mostrarError(false);

        // Agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })

    }

    // Mostrar el formulario

    const onClickFormulario = ()=> {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick= {onClickFormulario}
            >Nuevo Proyecto</button>
           {
               formulario ?
                    (
                        <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto" 
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />
            
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />
            
            
                        </form>
                    )
                : null }

                { errorFormulario && (
                    <p className="mensaje error">El nombre del proyecto es obligatorio</p>
                )}
        </Fragment>
    )
}

export default NuevoProyecto;

