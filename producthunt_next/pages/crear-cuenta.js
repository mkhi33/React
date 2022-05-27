import React, { useState} from 'react'
import Router from 'next/router'
import { css } from '@emotion/react'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'

import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

import firebase from '../firebase'
const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}
const CrearCuenta = () => {

  const [ error, setError ] = useState(false)
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion( STATE_INICIAL, validarCrearCuenta, crearCuenta)

  const { nombre, email, password } = valores

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password)
      Router.push('/')
      
    } catch (error) {
      console.error('Hubo un error al crear el usuario', error)
      console.log("Error")
      setError(error?.message)
    }
  }

  return (
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Crear Cuenta</h1>
          <Formulario noValidate onSubmit={handleSubmit}>
            {errores.nombre && <Error>{ errores.nombre}</Error>}
            <Campo>
              <label htmlFor='nombre'>Nombre</label>
              <input type="text" id="nombre" placeholder='Tu Nombre'  name='nombre' value={nombre} onBlur={handleBlur} onChange={handleChange} />
            </Campo>
            {errores.email && <Error>{ errores.email}</Error>}
            <Campo>
              <label htmlFor='email'>Email</label>
              <input type="email" id="email" placeholder='Tu email' name='email' value={email} onBlur={handleBlur} onChange={handleChange} />
            </Campo>
            {errores.password && <Error>{ errores.password}</Error>}
            <Campo>
              <label htmlFor='password'>password</label>
              <input type="password" id="password" placeholder='Tu Password' name='password' value={password} onBlur={handleBlur} onChange={handleChange} />
            </Campo>

            {error && <Error>{ error}</Error>}
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
  )
}

export default CrearCuenta