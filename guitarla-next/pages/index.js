import Layout from '@/components/Layout'
import Guitarra from '@/components/Guitarra'
import styles from '@/styles/Grid.module.css'
import Post from '@/components/Post'
export default function Home({guitarras, posts}) {
  return (
    <>
      <Layout title={'Inicio'} description='Blog de música, venta de guitarras y más' >
        <main>
          <h1 className='heading'>Nuestra colección</h1>
          <div className={styles.grid}>
            {guitarras?.map( guitarra => ( 
              <Guitarra 
              key={guitarra.id} 
              guitarra={guitarra.attributes} /> 
              ))}
          </div>
        </main>
        <section>
          <h2 className='heading'>Blog</h2>

          <div className={styles.grid}>{posts?.map( post => ( <Post key={post.id} post={post.attributes} />) )}</div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlBlogs = `${process.env.API_URL}/posts?populate=imagen`

  const [resGuitarras, resBlogs] = await Promise.all([fetch(urlGuitarras), fetch(urlBlogs)])

  const [{data:guitarras}, {data: posts}] = await Promise.all([resGuitarras.json(), resBlogs.json()])

  return {
    props: {
      guitarras,
      posts
    }
  }
}
