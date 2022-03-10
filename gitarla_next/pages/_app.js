import '../styles/normalize.css'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const [ carrito, setCarrito ] = useState([]);

  useEffect( () => {
    const carritoLs = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLs);
  }, [])
  

  useEffect( () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito])

  const agregarCarrito = producto => {
  
    if(carrito.some( articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map( articulo => {
        if(articulo.id === producto.id ){
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado);
    }else {
      console.log("Nuevo producto")
    }

    setCarrito([...carrito, producto]);
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map( articulo => {
      if(articulo.id === producto.id ){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad} eliminarProducto={eliminarProducto} />
}

export default MyApp
