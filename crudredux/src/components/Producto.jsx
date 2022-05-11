import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

// Redux
import { useDispatch } from "react-redux"
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions"

const Producto = ({ producto }) => {
    const { nombre, precio, id} = producto
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = (id) => {
      // Preguntar al usuario

      Swal.fire({
        title: '¿Estas seguro?',
        text: "Un producto que se elimina no se puede recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, eliminar!',
        cancelButtonText: 'Cancelar',

      }).then((result) => {
        if (result.isConfirmed) {
          // Pasar al actions
          dispatch( borrarProductoAction(id) )

        }
      })

    }

    const redireccionarEdicion = (producto) => {
      dispatch( obtenerProductoEditar(producto) )
      navigate(`/productos/editar/${producto.id}`)
    }
  return (
    <tr>
        <td>{nombre}</td>
        <td><span className="font-weight-bold">$ {precio}</span></td>
        <td className="acciones">
            <button className="btn btn-primary mr-2" type="button" onClick={ () => redireccionarEdicion(producto)}>Editar</button>
            <button onClick={ () => confirmarEliminarProducto(id)} type="button" className="btn btn-danger">Eliminar</button>
        </td>
    </tr>
  )
}

export default Producto