import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const Pagina404 = () => {
  return (
    <Layout title='Página no encontrada'>
        <p className='error'>Página no encontrada</p>
        <Link className='error-enlace' href='/'>Volver a inicio</Link>
    </Layout>
  )
}

export default Pagina404