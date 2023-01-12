import { useLoaderData } from 'react-router';
import Post from '~/components/Post';
import { getPosts } from '~/models/posts.server'

import styles from '~/styles/blog.css'


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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts?.map( post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </main>
  )
}

export default Blog