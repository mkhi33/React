import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
const Header = () => {
    const location = useLocation()
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">
                <img className="logo" src={logo} alt="Logotipo GuitarLA" />
            </div>
            <nav className="navegacion">
                <Link className={location.pathname === '/' ? 'active' : ''} to='/'>Inicio</Link>
                <Link className={location.pathname === '/nosotros' ? 'active' : ''} to='/nosotros'>Nosotros</Link>
                <Link className={location.pathname === '/tienda' ? 'active' : ''} to='/tienda'>Tienda</Link>
                <Link className={location.pathname === '/blog' ? 'active' : ''} to='/blog'>Blog</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header