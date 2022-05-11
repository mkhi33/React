import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { obtenerProductosActions } from "../actions/productoActions"
import Producto from "./Producto"
const Productos = () => {

  const dispatch = useDispatch()

  useEffect( () => {
    const cargarProductos = () => dispatch( obtenerProductosActions() )
    cargarProductos()
  }, [])

  // Obtener el state
  const productos = useSelector( state => state.productos.productos)
  const error = useSelector( state => state.productos.error)
  const cargando = useSelector( state => state.productos.loading)

  return (
    <>
        <h2 className="text-center my-5">Listado de productos</h2>
        { error && <p className="font-weight-bold alert alert-danger text-center ">Hubo un error</p>}
        { cargando && <p className="text-center">Cargando...</p>}
        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.length && (
                  productos.map( producto => (
                    <Producto key={producto.id} producto={producto} />
                  ))
                )}
            </tbody>
        </table>
        {productos.length === 0 && <p>No hay productos agregados</p>}
    </>
  )
}

export default Productos