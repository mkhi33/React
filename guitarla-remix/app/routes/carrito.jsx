import { useOutletContext } from '@remix-run/react'
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
    const { carrito } = useOutletContext()

  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">

            <div className="carrito">
                <h2>Articulos</h2>
                {carrito.length === 0 ? <p>No hay articulos en el carrito</p> : (
                    carrito.map( producto => (
                        <div className='producto' key={producto.id} >
                            <div>
                                <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'>{producto.nombre}</p>
                                <p className='cantidad'>Cantidad: {producto.cantidad}</p>
                                <p className='precio'>$<span>{producto.precio}</span></p>
                                <p className='subtotal'>Subtotal: $<span>{ producto.cantidad * producto.precio}</span></p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $</p>
            </aside>

        </div>
    </main>
  )
}

export default Carrito