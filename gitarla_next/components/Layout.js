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
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>

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
