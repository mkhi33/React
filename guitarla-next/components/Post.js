import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Blog.module.css'
import { formatearFecha } from "@/utils/helpers";

const Post = ({post}) => {
    const { contenido, imagen, titulo, url, publishedAt} = post;

  return (
    <article>
        <Image src={imagen?.data?.attributes?.formats?.medium?.url} alt={`Imagen blog ${titulo}`} width={600} height={400} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Leer post</Link>
        </div>
    
    </article>
  )
}

export default Post