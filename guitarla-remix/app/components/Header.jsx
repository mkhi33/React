import {  } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './Navegacion'
const Header = () => {
    
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">
                <img className="logo" src={logo} alt="Logotipo GuitarLA" />
            </div>
            <Navegacion />
        </div>
    </header>
  )
}

export default Header