import { createContext, useState, useEffect } from "react";

// Crear el context

export const CategoriasContext = createContext();

// Crear el provider

const CategoriasProvider = (props) => {

    const [ categorias, setCategorias ] = useState([]);

    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCategorias(resultado.drinks);
        }

        consultarAPI()



    }, [])

    return (
        <CategoriasContext.Provider
            value={{
               categorias 
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;