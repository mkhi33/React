import { useState } from 'react'

import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'GuitarLA - Remix',
        viewport: "width=device-width,initial-scale=1"
    })
}
export function links() {
    return ([
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }, 

    ])
}

export default function App() {

    const [ carrito, setCarrito ] = useState([])

    const agregarCarrito = (guitarra) => {
        setCarrito([...carrito, guitarra])
    }
    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito
                }}
             />
        </Document>
    )
}


function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Manejo de errores

export function CatchBoundary() {
    const error = useCatch()
    return (
        <Document>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal</Link>
            <p className='error'>{error.status} {error.statusText}</p>
        </Document>
    )
}

export function ErrorBoundary({error}) {
    return(
        <Document>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal</Link>
            <p className='error'>{error.status} {error.statusText}</p>
        </Document>
    )
}