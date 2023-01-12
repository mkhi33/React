import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/Listado-guitarras';
import { getGuitarras } from '~/models/guitarras.server'

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

    <ListadoGuitarras guitarras={guitarras} />

  )
}

export default Tienda