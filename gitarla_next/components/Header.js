import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import {useRouter} from 'next/router'
const Header = ({guitarra}) => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href='/'>
                        <a>
                            <Image width={400} height={100} src='/img/logo.svg' alt='Imagen Logo' />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>

                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>

            {router.pathname === '/' && (
                <img className={styles.guitarra} src="/img/header_guitarra.png" alt="imagen header guitarra" />
            )}
        </header>
    )
}

export default Header
