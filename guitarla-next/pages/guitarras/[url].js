
import Layout from '@/components/Layout'
import styles from '@/styles/Guitarras.module.css'
import Image from 'next/image'
const Producto = ({guitarra}) => {
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
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