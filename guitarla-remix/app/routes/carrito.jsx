import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import styles from '~/styles/carrito.css'

export function links() {
    return ([
        {rel: 'stylesheet', href: styles}
    ])
}

export function meta() {
    return {
        title: 'GuitarLA - Carrito de compras',
        description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
    }
}

const Carrito = () => {
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()
    const [ total, setTotal ] = useState(0)
    useEffect( () => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.precio * producto.cantidad), 0)
        setTotal(calculoTotal)
    }, [carrito])
  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">

            <div className="carrito">
                <h2>Articulos</h2>
                {carrito?.length === 0 ? <p>No hay articulos en el carrito</p> : (
                    carrito?.map( producto => (
                        <div className='producto' key={producto.id} >
                            <div>
                                <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'>{producto.nombre}</p>
                                <p className='cantidad'>Cantidad:</p>
                                <select onChange={ (e) => actualizarCantidad({
                                    cantidad: parseInt(e.target.value),
                                    id: producto.id
                                })} className='select' value={producto.cantidad}>
                                    <option value="">-- Seleccione --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <p className='precio'>$<span>{producto.precio}</span></p>
                                <p className='subtotal'>Subtotal: $<span>{ producto.cantidad * producto.precio}</span></p>
                                <button onClick={() => eliminarGuitarra(producto.id)} type='button' className='btn-eliminar'>x</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: ${total}</p>
            </aside>

        </div>
    </main>
  )
}

export default Carrito