import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Layout from '../components/layout/Layout'
import DetallesProducto from '../components/layout/DetallesProducto'
import useProductos from '../hooks/useProductos'
const Buscar = () => {
  const router = useRouter();
  const { query: {q} } = router;
  const [ resultado, setResultado ] = useState([])
  // Todos los productos 
  const { productos } = useProductos('creado')

  useEffect( () => {

    if(q && productos ) {
      const busqueda = q.toLowerCase()
      const filtro = productos.filter( producto => {
        return (
          producto.nombre.toLowerCase().includes(busqueda) ||
          producto.descripcion.toLowerCase().includes(busqueda)
        )
      })
      setResultado( filtro )

    }
  }, [q, productos])
  return (
    <Layout>
      <div className="listado-productos">
        <ul className="contenedor">
          {resultado.map( producto => (
            <DetallesProducto key={producto.id} producto={producto} />
          ))}
        </ul>
      </div>
  </Layout>
  )
}

export default Buscar