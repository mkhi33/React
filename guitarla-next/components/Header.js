import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo.svg'
import carrito from '@/public/img/carrito.png'
const Header = () => {

  const router = useRouter()
  console.log(router.pathname)
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
          <Image src={logo} width={300} height={40} alt=""/>
          <nav className={styles.navegacion}>
              <Link className={router.pathname === '/' ? styles.active : ''} href='/'>Inicio</Link>
              <Link className={router.pathname === '/nosotros' ? styles.active : ''} href='/nosotros'>Nosotros</Link>
              <Link className={router.pathname === '/tienda' ? styles.active : ''} href='/tienda'>Tienda</Link>
              <Link className={router.pathname === '/blog' ? styles.active : ''} href='/blog'>Blog</Link>
              <Link href='/carrito'>
                <Image src={carrito} alt='Imagen carrito' width={30} height={25} />
              </Link>
          </nav>
      </div>
    </header>
  )
}

export default Header