import React, { useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../firebase'
const useProductos = (orden) => {
    const [ productos, setProductos ] = useState([])
    const { firebase } = useContext(FirebaseContext);
  
    useEffect( () => {
      const obtenerProductos = async () => {
          if( orden === 'votos' ) {
              setProductos( await firebase.obtenerProductosPorVotos() )
          }else if( orden === 'creado') {
            setProductos( await firebase.obtenerProductos() )
          }
      }
      obtenerProductos()
      // eslint-disable-next-line
    }, [])
    return {
        productos
    }
}

export default useProductos