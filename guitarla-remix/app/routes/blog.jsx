import { useLoaderData } from 'react-router';
import { getPosts } from '~/models/posts.server'

import styles from '~/styles/blog.css'
import ListadoPosts from '../components/Listado-posts';


export function meta(){
  return {
    title: `GuitarLA - Nuestro Blog`,
    description: `GuitarLA, Blog de música y venta de guitarras`
  }
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export function links() {
  return ([
    {
      rel: 'stylesheet',
      href: styles
    }
  ])
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  )
}

export default Blog