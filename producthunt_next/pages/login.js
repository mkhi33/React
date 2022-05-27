import React, { useState} from 'react'
import Router from 'next/router'
import { css } from '@emotion/react'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'

import useValidacion from '../hooks/useValidacion'
import validarIniciarSesion from '../validacion/validarIniciarSesion'

import firebase from '../firebase'
const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {

  const [ error, setError ] = useState(false)
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion( STATE_INICIAL, validarIniciarSesion, iniciarSesion)

  const { email, password } = valores

  async function iniciarSesion() {

    try {
      
      await firebase.iniciarSesion(email, password)
      Router.push('/')
      
    } catch (error) {
      console.error('Hubo un error al iniciar sesión', error)
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
          >Iniciar Sesión</h1>
          <Formulario noValidate onSubmit={handleSubmit}>

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
            <InputSubmit type="submit" value="Iniciar Sesión" />
          </Formulario>
        </>
      </Layout>
  )
}

export default Login