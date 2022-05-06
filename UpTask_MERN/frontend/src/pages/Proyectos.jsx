import PreviewProyecto from '../components/PreviewProyecto'
import useProyectos from '../hooks/useProyectos'

const Proyectos = () => {
  const { proyectos, mostrarAlerta } = useProyectos()

  return (
    <>
      <h1 className="text-4xl font-bold">Proyectos</h1>
      <div className='bg-white shadow rounded-lg'>
        {proyectos.length ? (
          proyectos.map( proyecto => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : <p className='mt-5 text-center text-gray-600 uppercase p-5'>No hay proyectos aún</p>}
      </div>
    </>
  )
}

export default Proyectos