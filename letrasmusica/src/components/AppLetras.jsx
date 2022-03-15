import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta";
import Letra from "./Letra";
const AppLetras = () => {

    const { alerta, letra, cargando } = useLetras();

  return (
    <>
        <header>Búsqueda de letras de canciones</header>
        <Formulario />
        <main>
            {alerta ? <Alerta>{alerta}</Alerta> : 
                letra ? <Letra /> : 
                cargando ? "Cargando..." :
                    <p className="text-center">
                        Busca letras de tus artistas favoritos
                    </p>
                  
            }   

        </main>
    </>
  )
}

export default AppLetras