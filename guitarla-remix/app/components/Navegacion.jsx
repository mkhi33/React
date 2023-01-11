import { Link, useLocation } from '@remix-run/react'


const Navegacion = () => {
    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link className={location.pathname === '/' ? 'active' : ''} to='/'>Inicio</Link>
        <Link className={location.pathname === '/nosotros' ? 'active' : ''} to='/nosotros'>Nosotros</Link>
        <Link className={location.pathname === '/tienda' ? 'active' : ''} to='/tienda'>Tienda</Link>
        <Link className={location.pathname === '/blog' ? 'active' : ''} to='/blog'>Blog</Link>
    </nav>
  )
}

export default Navegacion