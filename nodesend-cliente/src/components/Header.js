import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react";
import authContext from "@/context/auth/authContext";
import appContext from "@/context/app/appContext";
import { useRouter } from "next/router";


const Header = () => {

  const AuthContext = useContext(authContext);
  const AppContext = useContext(appContext);

  const { user, userAuthenticated, closeSession } = AuthContext;
  const { cleanState } = AppContext;

  const router = useRouter();

  useEffect(() => {
    userAuthenticated();
  }, []);
  
  
  const redirect = () => {
    router.push("/");
    cleanState();
  }

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">

        <Image onClick={ () => redirect()} className="w-64 mb-8 md:mb-0 cursor-pointer" src='/logo.svg' alt="Logo Nodesend" width={100} height={15} />

        <div >
            {user ? ( 
              <div className="flex items-center gap-3">
                <p>Hola {user?.name}</p>
                <button onClick={closeSession} className="bg-black px-5 py-3 rounded text-white font-bold uppercase">Cerrar sesión</button>
              </div>
            ) : ( 
              <div className="flex gap-3">
                <Link className="bg-red-500 px-5 py-3 rounded text-white font-bold uppercase" href={'/login'}>Iniciar sesión</Link>
                <Link className="bg-black px-5 py-3 rounded text-white font-bold uppercase" href={'/signin'}>Crear Cuenta</Link>
              </div>
            )}
            </div>
    </header>
  )
}

export default Header