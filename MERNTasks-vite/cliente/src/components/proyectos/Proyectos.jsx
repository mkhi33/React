import React from 'react';
import Slider from '../layout/Slider';
import Barra from '../layout/Barra';
import FormTareas from '../tareas/FormTareas';
import ListadoTareas from '../tareas/ListadoTareas';
const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Slider />
        
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTareas />
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos;

