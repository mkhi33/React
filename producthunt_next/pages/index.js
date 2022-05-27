import React from "react";
import DetallesProducto from "../components/layout/DetallesProducto";
import Layout from "../components/layout/Layout";
import useProductos from "../hooks/useProductos";

export default function Home() {

  const { productos } = useProductos('creado')

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <ul className="contenedor">
            {productos.map( producto => (
              <DetallesProducto key={producto.id} producto={producto} />
            ))}
          </ul>
        </div>
      </Layout>
    </div>

  )
}
