import { useContext, useState } from "react"
import { CategoriasContext } from "../context/CategoriasContext"
const Formulario = () => {

    const { hola } = useContext(CategoriasContext);
    return (
        <div>
            {hola}
        </div>
    )
}

export default Formulario
