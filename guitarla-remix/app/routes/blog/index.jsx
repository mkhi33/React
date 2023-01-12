import { useLoaderData } from 'react-router';
import { getPosts } from '~/models/posts.server'
import ListadoPosts from '~/components/Listado-posts';


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
const Blog = () => {
  const posts = useLoaderData();
  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog