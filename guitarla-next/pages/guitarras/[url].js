
import Layout from '@/components/Layout'
import styles from '@/styles/Guitarras.module.css'
import Image from 'next/image'
import { useState } from 'react'
const Producto = ({guitarra, agregarCarrito}) => {

    const [ cantidad, setCantidad ] = useState(0)

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()
        if( cantidad < 1 ) {
            alert('Seleccione una cantidad válida')
            return
        }
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)

    }
  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image src={imagen?.data.attributes?.formats?.medium?.url} alt={`Imagen de guitarra ${nombre}`} width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <label htmlFor="cantidad">Cantidad</label>
                    <select onChange={ (e) => setCantidad(+e.target.value)} name="cantidad" id="cantidad">
                        <option value="">--Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        
                    </select>

                    <input type='submit' value='Agregar al carrito' />

                </form>

            </div>
        </div>
    </Layout>
  )
}

export default Producto

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    const paths = data.map(guitarra => ({
        params: {url: guitarra.attributes.url}
    }))
    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({params}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filter[url]=${params.url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()
    return {
        props: {
        guitarra
        }
    }
}
// export async function getServerSideProps({params}) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filter[URL]=${params.url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
//     return {
//         props: {
//         guitarra
//         }
//     }
// }