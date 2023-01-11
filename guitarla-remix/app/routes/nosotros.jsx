import imagen from '../../public/img/nosotros.jpg'
import style from '~/styles/nosotros.css'

export function links() {
  return ([
    {
      rel: 'stylesheet',
      href: style
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ])
}
export function meta() {
  return ({
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  })
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='Imagen sobre nosotros' />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nulla consectetur laboriosam, porro mollitia harum non quo qui? Facilis harum ratione eos quia magni repudiandae cum excepturi eaque esse tempora.
          Quae incidunt consectetur pariatur atque recusandae voluptatum dicta saepe quo nulla consequuntur aliquam nihil dolores labore non modi quis repellat at qui, accusantium magnam mollitia. Quidem officiis blanditiis amet laboriosam.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nulla consectetur laboriosam, porro mollitia harum non quo qui? Facilis harum ratione eos quia magni repudiandae cum excepturi eaque esse tempora.
          Quae incidunt consectetur pariatur atque recusandae voluptatum dicta saepe quo nulla consequuntur aliquam nihil dolores labore non modi quis repellat at qui, accusantium magnam mollitia. Quidem officiis blanditiis amet laboriosam.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros