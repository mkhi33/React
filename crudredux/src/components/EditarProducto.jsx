import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { editarProductoAction } from "../actions/productoActions"

const EditarProducto = () => {
  const navigate = useNavigate()
  const productoEditar = useSelector( state => state.productos.productoeditar)
  const dispatch = useDispatch()
  const [producto, setProducto ] = useState({
    nombre: '',
    precio: 0
  })

  useEffect( () => {
    if( productoEditar ){
      setProducto(productoEditar)
    }else {
      navigate('/')
    }

  }, [productoEditar])

  const { nombre, precio, id} = producto
  const handleSubmit = e => {
    e.preventDefault()

    dispatch( editarProductoAction(producto) )
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input 
                  type='text' 
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={ (e) => setProducto({...producto, [e.target.name]: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input 
                  type='number' 
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={ (e) => setProducto({...producto, [e.target.name]: Number(e.target.value)})}
                />
              </div>
              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase  d-block w-100">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto