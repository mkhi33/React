import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import ModalFormularioTarea from '../components/ModalFormularioTarea'
import Tarea from '../components/Tarea'
import ModalEliminarTarea from '../components/ModalEliminarTarea'
import Alerta from '../components/Alerta'
import Colaborador from '../components/Colaborador'
import ModalEliminarColaborador from '../components/ModalEliminarColaborador'
const Proyecto = () => {
    const params = useParams()
    const { obtenerProyecto, proyecto, cargando, handleModalTarea, alerta } = useProyectos()
    const { nombre } = proyecto 

    useEffect( () => {
        obtenerProyecto(params.id)
    }, [])
    if(cargando) return 'cargando...'
    const { msj } = alerta;
  return (
      <>
        <div className='flex justify-between'>
            <h1 className='font-black text-4xl '>{nombre}</h1>
            <div className='flex items-center gap-2 text-gray-400 hover:text-black '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <Link className='uppercase font-bold' to={`/proyectos/editar/${params.id}`}>Editar</Link>
            </div>
        </div>
        <button onClick={ handleModalTarea } type='button' className='flex gap-2 text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center mt-5 items-center justify-center' >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Nueva Tarea
        </button>
        <p className='font-bold text-xl mt-10'>Tareas del Proyecto</p>

        {msj && (
            <div className='flex justify-center'>
                <div className='w-full md:w-1/3 lg:w-1/4'>
                    <Alerta alerta={alerta} />
                </div>
            </div>
        )}
        <div className='bg-white shadow mt-10  rounded-lg'>
            {proyecto.tareas?.length ? ( proyecto.tareas?.map( tarea => (
                <Tarea key={tarea._id} tarea={tarea} />
            ) )) : <p className='text-center my-5 p-10'>No hay tareas en este proyecto</p>}
        </div>

        <div className='flex items-center justify-between mt-10'>
            <p className='font-bold text-xl'>Colaboradores</p>
            <Link className='text-gray-400 uppercase font-bold hover:text-black' to={`/proyectos/nuevo-colaborador/${proyecto._id}`} >Añadir</Link>
        </div>
        <div className='bg-white shadow mt-10  rounded-lg'>
            {proyecto.colaboradores?.length ? ( proyecto.colaboradores?.map( colaborador => (
                <Colaborador 
                    key={colaborador._id}
                    colaborador={colaborador}

                />
            ) )) : <p className='text-center my-5 p-10'>No hay colaboradores en este proyecto</p>}
        </div>
        <ModalFormularioTarea  />
        <ModalEliminarTarea />
        <ModalEliminarColaborador />
      </>
  )
}

export default Proyecto