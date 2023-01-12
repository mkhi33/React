import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/Listado-guitarras';
import { getGuitarras } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'


export function links() {
  return [
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return {
    title: 'GuitarLA - Tienda de guitarras',
    description: 'Nuestra colección de guitarras'
  }
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras;
}
const Tienda = () => {

  const {data: guitarras} = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  )
}

export default Tienda