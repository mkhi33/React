import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
    return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
                {
                    //<Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />

                }
                <div>
                    <p>
                        In efficitur nisi et felis egestas, sit amet porttitor ex laoreet. Donec nec pretium neque. Donec nec tincidunt eros, vitae pretium ex. Nullam ut nisi diam. Aliquam hendrerit turpis elit. Integer egestas erat eros, et egestas felis bibendum vitae. Praesent aliquet dui eleifend condimentum maximus. Nunc et nunc in risus dignissim commodo. Morbi non purus leo. Integer tristique ligula nec risus porttitor pellentesque.
                    </p>
                    <p>
                        In efficitur nisi et felis egestas, sit amet porttitor ex laoreet. Donec nec pretium neque. Donec nec tincidunt eros, vitae pretium ex. Nullam ut nisi diam. Aliquam hendrerit turpis elit. Integer egestas erat eros, et egestas felis bibendum vitae. Praesent aliquet dui eleifend condimentum maximus. Nunc et nunc in risus dignissim commodo. Morbi non purus leo. Integer tristique ligula nec risus porttitor pellentesque.
                    </p>
                </div>
            </div>
        </main>
      </Layout>
    )
}

export default Nosotros
