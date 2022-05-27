import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

const useAutenticacion = () => {
    const [ usuarioAutenticado, setUsuarioAutentucado ] = useState(null);
    useEffect( () => {
        const onuscribe = firebase.auth.onAuthStateChanged( usuario => {
            if( usuario ) {
                setUsuarioAutentucado(usuario)
            }else {
                setUsuarioAutentucado(null)

            }
        });
        return () => onuscribe();
    }, [])

    return usuarioAutenticado

}

export default useAutenticacion