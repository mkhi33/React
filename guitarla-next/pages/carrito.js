import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import styles from "@/styles/Carrito.module.css"

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [ total, setTotal ] = useState(0)
    useEffect( () => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])
  return (
    <Layout title="Carrito de compras">
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito?.length === 0 ? <p>No hay articulos en el carrito</p> : (
                        carrito.map( producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image src={producto.imagen} alt={`Imagen ${producto.nombre}`} width={250} height={480}  />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <select className={styles.select} defaultValue={producto.cantidad} onChange={ (e) => actualizarCantidad({
                                            id: producto.id,
                                            cantidad: +e.target.value
                                        })} name="cantidad" id="cantidad">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            
                                        </select>
                                    </div>
                                    <p className={styles.precio}><span>${producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                    <button className={styles.eliminar} type="button" onClick={ () => eliminarProducto(producto.id)}>x</button>
                                </div>
                            </div>
                        ) )
                    )}
                </div>
                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: ${total} </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default Carrito