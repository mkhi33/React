import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85) ;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
     font-weight: 700;
     text-align: center;
`

const HabitacionPreview = ({ habitacion }) => {
    const { contenido, imagen, titulo, slug } = habitacion;
  return (
    <div css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;

    
    `}>
        <Image fluid={imagen.fluid} alt={`Imagen ${titulo}`}  />
        <div css={css`
            padding:3rem;
        `}>
            <h3 css={css`
                font-size: 3rem;
            `}>{titulo}</h3>
            <p css={css`
                    overflow: hidden;
                    height:300px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                `}>{contenido}</p>

            <Boton to={slug}>Ver habitación</Boton>
        </div>
    </div>
  )
}

export default HabitacionPreview