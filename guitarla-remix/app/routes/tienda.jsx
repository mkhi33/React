import { useLoaderData } from '@remix-run/react'
import Guitarra from '~/components/Guitarra';
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
    <main>
      <h2 className='heading'>Nuestra Colección</h2>

      {guitarras.length && (
        <div className='guitarras-grid'>
          {guitarras.map( guitarra => (
            <Guitarra guitarra={guitarra?.attributes} key={guitarra.id} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda