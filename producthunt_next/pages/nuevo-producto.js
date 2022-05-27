import React, { useState, useContext } from 'react'
import Router, {useRouter} from 'next/router'
import { css } from '@emotion/react'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'

import useValidacion from '../hooks/useValidacion'
import validarCrearProducto from '../validacion/validarCrearProducto'
import { ref } from "firebase/storage";
import { FirebaseContext } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
import InputFile from '../components/ui/InputFile'
import Error404 from '../components/layout/404'
const STATE_INICIAL = {
  nombre: '',
  empresa: '',
  imagen: '',
  url: '',
  descripcion: ''
}

const NuevoProducto = () => {

  const [ error, setError ] = useState(false)
  const router = useRouter()
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion( STATE_INICIAL, validarCrearProducto, crearProducto)

  const { nombre, empresa, imagen, url, descripcion } = valores
  const [urlImage, setUrlImage] = useState("") 
  const [file, setFile] = useState("") 
  // Context con las operaciones CRUD de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {

    try {
      // Si el usuario no esta autenticado
      if(!usuario){
        return router.push('/login')
      }
      
      // Crear el objeto de nuevo producto
      const producto = {
        nombre,
        empresa,
        url,
        urlImage: '',
        descripcion,
        votos: 0,
        comentarios: [],
        creado: Date.now(),
        creador: {
          id: usuario.uid,
          nombre: usuario.displayName
        },
        haVotado: []
      }
  
      // Insertarlo en la base de datos

      
      const storageRef = ref(firebase.storage, `images/productos/${urlImage}`);
      await firebase.subirImagen(storageRef, file )
      producto.urlImage = await firebase.obtenerImagen(storageRef.fullPath)
      await addDoc(collection(firebase.db, "productos"), producto);
      return router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }



  return (
      <Layout>
        {!usuario ? ( <Error404 /> ) : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >Nuevo Producto</h1>
            <Formulario noValidate onSubmit={handleSubmit}>
  
              <fieldset>
                <legend>Información General</legend>
                <Campo>
                <label htmlFor='nombre'>Nombre Producto</label>
                <input type="text" id="nombre" placeholder='Nombre del Producto'  name='nombre' value={nombre} onBlur={handleBlur} onChange={handleChange} />
                </Campo>
                
                {errores.nombre && <Error>{ errores.nombre}</Error>}
                <Campo>
                <label htmlFor='empresa'>Nombre Empresa</label>
                  <input type="text" id="empresa" placeholder='Empresa o compañia'  name='empresa' value={empresa} onBlur={handleBlur} onChange={handleChange} />
                </Campo>
                {errores.empresa && <Error>{ errores.empresa}</Error>}
  
  
                <Campo>
                  <label htmlFor='imagen'>Imagen</label>
                  <InputFile setUrlImage={setUrlImage} setFile={setFile} />
                </Campo>
                {errores.imagen && <Error>{ errores.imagen}</Error>}
                
                
                  
                <Campo>
                  <label htmlFor='url'>URL</label>
                  <input type="url" id="url" name='url' value={url} placeholder="URL de tu producto" onBlur={handleBlur} onChange={handleChange} />
                </Campo>
                {errores.url && <Error>{ errores.url}</Error>}
              
              </fieldset>
  
              <fieldset>
                <legend>Sobre tu Producto</legend>
                <Campo>
                  <label htmlFor='descripcion'>Descripción</label>
                  <textarea id="descripcion" name='descripcion' value={descripcion} onBlur={handleBlur} onChange={handleChange} />
                  </Campo>
                  {errores.descripcion && <Error>{ errores.descripcion}</Error>}  
                </fieldset>
                
                {error && <Error>{ error}</Error>}
                <InputSubmit type="submit" value="Crear Producto" />
  
            </Formulario>
          </>
        )}
      </Layout>
  )
}

export default NuevoProducto