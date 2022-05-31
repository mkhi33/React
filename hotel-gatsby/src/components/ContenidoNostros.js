import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: auto;
    @media( min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`

const ContenidoNostros = () => {
    const resultado = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: {eq:"nosotros"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid( maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

  return (
    <>
        <h2 css={css`
            margin-top: 4rem;
            text-align: center;
            font-size: 4rem;
        `}>{titulo}</h2>
        <Contenido>
            <p>{contenido}</p>
            <Image fluid={imagen.fluid} alt="nosotros" />
        </Contenido>
    </>
  )
}

export default ContenidoNostros