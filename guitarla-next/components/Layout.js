import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name='description' content={description} />
        </Head>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout