import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Blog.module.css'
import { formatearFecha } from "@/utils/helpers"

const Post = ({post}) => {
    const { titulo, contenido, imagen, publishedAt } = post[0].attributes
  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} width={1000} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        
        </article>
    </Layout>
  )
}

export default Post

export async function getServerSideProps({params}) {
    console.log(params.url)
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${params.url}&populate=imagen&url=${params.url}`)
  const { data:post } = await respuesta.json()
  return {
    props: {
      post
    }
  }
}