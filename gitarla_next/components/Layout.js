import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect, useState } from 'react';


const Layout = ({children, pagina, guitarra}) => {


    return (
        <div>
            <Head>
                <title>GitarLA - {pagina}</title>
                <meta name="description" content="Sitio Web de venta de gitarras" />

            </Head>
            <Header
                guitarra={guitarra}
            />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarra:null
}

export default Layout
