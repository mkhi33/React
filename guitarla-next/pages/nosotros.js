import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout title={'Nosotros'} description="Sobre nosotros, GuitarLA, tienda de música">
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' alt='Imagen sobre nosotros' width={1000} height={800} />
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in malesuada turpis. Vivamus mollis nisi nec metus luctus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet iaculis nunc, eget scelerisque arcu. Aliquam convallis bibendum turpis efficitur suscipit.
              </p>

              <p>
              Praesent commodo tortor ut lacus malesuada, at vehicula sapien bibendum. Fusce vel dui pretium, fringilla nibh sed, porta sem. Quisque mollis, odio sed pharetra consectetur, nisl tellus tempus nulla, ac luctus leo nisi ac nibh. Quisque bibendum lacus magna, id iaculis velit feugiat volutpat. Curabitur egestas ex at pharetra scelerisque. Praesent eu dui quam. Sed ac velit leo.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros