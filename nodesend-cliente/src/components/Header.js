import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
            <Image className="w-64 mb-8 md:mb-0" src='./logo.svg' alt="Logo Nodesend" width={100} height={15} />
        </Link>
        <div className="flex gap-3">
            <Link className="bg-red-500 px-5 py-3 rounded text-white font-bold uppercase" href={'/login'}>Iniciar sesión</Link>
            <Link className="bg-black px-5 py-3 rounded text-white font-bold uppercase" href={'/signin'}>Crear Cuenta</Link>
        </div>
    </div>
  )
}

export default Header