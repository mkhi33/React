import React, { useState } from 'react'
import Router from 'next/router';
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;
const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover {
        cursor: pointer;
    }
`;

const Buscar = () => {
    const [ busqueda, setBusqueda ] = useState('')

    const handleBuscarProducto = (e) => {
        e.preventDefault()
        if( busqueda.trim() === '' ) return

        // Redireccionar el usuario a /buscar
        Router.push({
            pathname: '/buscar',
            query: {
                q: busqueda
            }
        })
    }
  return (
    <form
        onSubmit={ handleBuscarProducto }
        css={css`
            position: relative;
        `}
    >
        <InputText value={busqueda} onChange={ (e) => setBusqueda(e.target.value)} placeholder='Buscar Productos' type='text' />
        <InputSubmit type='submit'>Buscar</InputSubmit>
    </form>
  )
}

export default Buscar