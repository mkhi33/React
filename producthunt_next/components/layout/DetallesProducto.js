import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale/';
import styled from '@emotion/styled'

const Producto = styled.li`
  padding:4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
`

const DescripcionProducto = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`;

const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin:0;
  :hover {
    cursor: pointer;
  }
`
const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin:0;
  color:#888;
`

const Comentarios = styled.div`
  margin-top: 2rem;
  display:flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: .3rem 1rem;
    margin-right: 2rem;
  }

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;

const Votos = styled.div`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid #e1e1e1;
  padding: 1rem 3rem;
  div {
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const DetallesProducto = ( {producto} ) => {
  const {id, comentarios, creado, descripcion, empresa, nombre, url, urlImage, votos} = producto

  return (
    <Producto>
      
      <DescripcionProducto>
        <div>
          <Image
            src={urlImage}
            alt={`Imagen ${nombre}`}
            width={200}
            height={200}
            layout="fixed"
          />
        </div>

        <div>
          <Link href={`/productos/${id}`}  >
            <Titulo>{nombre}</Titulo>
          </Link>
          <TextoDescripcion>{descripcion}</TextoDescripcion>
          <Comentarios>
            <div>
              <Image style={ {width: "2rem", marginRight:"2rem"}} src="/static/img/comentario.png"  alt={`Comentarios`} width={15} height={15} layout="fixed" />
              <p style={{marginLeft: "1rem"}}>{comentarios.length} comentarios</p>
            </div>
          </Comentarios>

          <p>Publicado hace: {formatDistanceToNow(new Date(creado), { locale:es})}</p>
        </div>

      </DescripcionProducto>
      <Votos>
        <div>&#9650;</div>
        <p>{votos}</p>
      </Votos>
    </Producto>
  )
}

export default DetallesProducto