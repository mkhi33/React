import { getGuitarra } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react';
import styles from '~/styles/guitarras.css';

export function links() {
    return {
        rel: 'stylesheet',
        href: styles
    }
}

export async function loader({params}) {
    const { guitarraUrl } = params;

    const {data} = await getGuitarra(guitarraUrl)

    return data;
}

const Guitarra = () => {
    const [guitarra] = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.attributes;

  return (
    <main className='contenedor guitarra'>
        <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className='descripcion'>{descripcion}</p>
            <p className='precio'>${precio}</p>
        </div>
    </main>
  )
}

export default Guitarra