import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
} from '../types'

import clienteAxios from '../config/axios'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

// Crear nuevos productos
export function crearNuevoProductoAction( producto) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() )

        try {
            // Enviar a la API y actualizar el state
            await clienteAxios.post('/productos', producto)
            dispatch( agregarProductoExito(producto) )
            Swal.fire('Correcto','EL producto se agrego correctamente', 'success')
        } catch (error) {
            console.log(error)
            dispatch( agregarProductoError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}


// Agregar producto
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// Si el producto se guarda en la base de datos

const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// Si hubo un error

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// Función que descarga los productos de la base de datos
export function obtenerProductosActions () {
    return async ( dispatch ) => {
        dispatch( descargarProductos() )

        try {
            const { data } = await clienteAxios.get('/productos')
            dispatch( descargaProductosExitosa(data) )
        } catch (error) {
            dispatch( descargaProductosError() )
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async ( dispatch ) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch( eliminarProductoExito() )

            // Si se elimina correctamente, mostrar alerta
            Swal.fire(
                '¡Eliminado!',
                'El producto se elimino correctamente',
                'success'
              )

        } catch (error) {
            console.log(error)
            dispatch( eliminarProductoError() )
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch( obtenerProductoEditarAction(producto) )
    }
}

const obtenerProductoEditarAction = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

// Edita un registro en la API y en el state
export function editarProductoAction( producto ) {
    return async (dispatch) => {
        dispatch( editarProducto() )
        try {
             await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch( editarProductoExito(producto) )
        } catch (error) {
            console.log(error)
            dispatch( editarProductoError() )
        }
    }
}

const editarProducto = (  ) => ({
    type: COMENZAR_EDICION_PRODUCTO
})
const editarProductoExito = ( producto ) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type:PRODUCTO_EDITADO_ERROR,
    payload: true
})