
import Layout from '../components/Layout'
import Listado from '../components/Listado'
const Tienda = ({guitarras}) => {
    console.log(guitarras)
    return (
    <Layout
        pagina='Tienda Virtual'
    >
        <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <Listado 
                guitarras={guitarras}
            /> 
        </main>
      </Layout>
    )
}

export async function getServerSideProps() {

    const urlGuitarras = `${process.env.API_URL}/gitarras`;
    const respuesta = await fetch(urlGuitarras)
    const guitarras = await respuesta.json();
    console.log(guitarras)

    return {
        props: {
            guitarras
        }
    }
}

export default Tienda
