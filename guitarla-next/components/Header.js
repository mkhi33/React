import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router'
const Header = () => {

  const router = useRouter()
  console.log(router.pathname)
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
          <Image src='img/logo.svg' width={300} height={40} alt=""/>
          <nav className={styles.navegacion}>
              <Link className={router.pathname === '/' ? styles.active : ''} href='/'>Inicio</Link>
              <Link className={router.pathname === '/nosotros' ? styles.active : ''} href='/nosotros'>Nosotros</Link>
              <Link className={router.pathname === '/blog' ? styles.active : ''} href='/blog'>Blog</Link>
              <Link className={router.pathname === '/tienda' ? styles.active : ''} href='/tienda'>Tienda</Link>
          </nav>
      </div>
    </header>
  )
}

export default Header