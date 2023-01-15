import Guitarra from "@/components/Guitarra"
import Layout from "@/components/Layout"
import styles from '@/styles/Grid.module.css'

const Tienda = ({guitarras}) => {
  return (
    <Layout title={'Tienda'} description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras?.map( guitarra => ( 
            <Guitarra 
            key={guitarra.id} 
            guitarra={guitarra.attributes} /> 
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tienda

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const { data:guitarras } = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data:guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}