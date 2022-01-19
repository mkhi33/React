import { useState, createContext } from 'react'


// Crear el context

export const CategoriasContext = createContext ();

// Crear el provider que es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
    // Crear el state del context
    const [ hola, guardarHola ] = useState("Hola");

    return (
        <CategoriasContext.Provider
            value= {{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );

}

export default CategoriasProvider;

