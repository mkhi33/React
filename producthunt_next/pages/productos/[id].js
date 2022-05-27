import React, { useEffect, useContext, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FirebaseContext } from '../../firebase'
import Error404 from '../../components/layout/404'
import Layout from '../../components/layout/Layout'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale/';
import { Campo, InputSubmit } from '../../components/ui/Formulario'
import Boton from '../../components/ui/Boton'
const ContenedorProducto = styled.div`
    @media(min-width:768px ) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Producto = () => {

    // State del componente
    const [ producto, setProducto ] = useState({})
    const [ error, setError ] = useState(false)
    const [ comentario, setComentario ] = useState({mensaje: ''})
    const [ consultarDB, setConsultarDB ] = useState(true)

    // Routing para obtener el id actual
    const router = useRouter()
    const { query: {id} } = router

    // Context de firebase
    const { firebase, usuario } = useContext(FirebaseContext)


    useEffect( ( ) => {
        if(id && consultarDB){
            const obtenerProducto = async () => {
                const docSnap = await firebase.obtenerProductosPorId(id)
                if (docSnap.exists()) {
                    setProducto(docSnap.data())
                    setConsultarDB(false)
                } else {
                    setError(true)
                    setConsultarDB(false)
                }
            }
            obtenerProducto()
        }
        // eslint-disable-next-line
    }, [id])

    if(Object.keys(producto).length === 0 && !error) return 'cargando...'
    
    const { comentarios, creado, descripcion, empresa, nombre, url, urlImage, votos, creador, haVotado} = producto
    // Administrar y validar los votos
    const votarProducto = async () => {
        if(!usuario) {
            router.push('login')
        }
        // Obtener y sumar un nuevo voto
        const nuevoTotal = votos +1

        // Verificar si el usuario actual ha votado en este producto
        if(haVotado.includes(usuario.uid)) return
        
        // Guardar el id del usuario que ha votado
        const nuevoHaVotado = [...haVotado,usuario.uid ]

        // Actualizar en la base de datos
        await firebase.nuevoVoto(id, nuevoTotal, nuevoHaVotado)
        // Actualizar el state
        setProducto({
            ...producto,
            votos: nuevoTotal
        })

        setConsultarDB(true) // Volver a consultar la BD

    }

    // Funciones para crear comentarios
    const comentarioChange = e => {
        setComentario({...comentario, [e.target.name]: e.target.value})
    }

    // Identifica si el que comenta es el creador del producto
    const esCreador = idUsuario => {
        if(creador.id === idUsuario) {
            return true
        }
        return false;
    }

    const handleAgregarComentario = async e => {
        e.preventDefault()
        if(!usuario) return router.push('/login')
        // Información extra al comentario
        comentario.usuarioId = usuario.uid
        comentario.usuarioNombre = usuario.displayName

        // Toamar copia de comentarios y agregarlos al arreglo
        const nuevosComentarios = [...comentarios, comentario];
        // Actualizar la base de datos
        await firebase.nuevoComentario(id, nuevosComentarios)
        // Actualizar el state
        setProducto({
            ...producto,
            comentarios: nuevosComentarios
        })

        setComentario({mensaje: ''})
        setConsultarDB(true) // Volver a consultar la BD

        
    }

    // Función que revisa que el creador del producto sea el mismo que esta autentucado
    const puedeBorrar = () => {
        if(!usuario) return false;
        if( creador.id === usuario.uid ) return true;
        return false;
    }

    // Elimina un producto de la base de datos
    const handleEliminarProducto = async () => {
        if(!usuario){
            return router.push('/login')
        }
        if(creador.id !== usuario.uid) return router.push('/login')
        try {

            await firebase.eliminarProducto(id)
            router.push('/')
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
      <Layout>
          { error ? <Error404 /> : (
            <div className='contenedor'>
                <h1 css={css`
                    text-align: center;
                    margin-top: 5rem;

                `}>{nombre}</h1>
                <ContenedorProducto>
                    <div>
                        <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale:es})}</p>
                        <p>Por: {creador.nombre} de {empresa} </p>
                        <Image src={urlImage} width={100} height={100} layout={'responsive'} alt={`Imagen ${nombre}`} />
                        <p>{descripcion}</p>
                        
                        { usuario && (
                            <>
                                <h2>Agrega tu comentario</h2>
                                <form
                                    onSubmit={handleAgregarComentario}
                                >
                                    <Campo>
                                        <input 
                                            type="text"
                                            name="mensaje"
                                            onChange={comentarioChange}
                                            value= {comentario.mensaje}
                                        />
                                    </Campo>
                                    <InputSubmit
                                        type="submit"
                                        value="Agregar Comentario"
                                    />
                                </form>
                            </>
                        )}

                        <h2 css={css`
                            margin: 2rem 0;
                        `}>Comentarios</h2>
                        { comentarios.length === 0 ? 'Aún no hay comentarios' : (

                            <ul>
                                { comentarios.map((comentario, index) => (
                                    <li key={`${usuario.uid}-${index}`}
                                        css={css`
                                            border: 1px solid #e1e1e1;
                                            padding: 2rem;
                                        `}
                                    >
                                        <p>{comentario.mensaje}</p>
                                        <p>Escrito por: 
                                            <span css={css`
                                                font-weight: bold;
                                            `}> {comentario.usuarioNombre}
                                            </span>
                                        </p>
                                        {esCreador(comentario.usuarioId) && <CreadorProducto>Es creador</CreadorProducto>}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <aside>
                        <Boton
                            target="_blank"
                            bgColor="true"
                            href={url}
                        >Visitar URL</Boton>
                
                       <div css={css`
                            margin-top: 5rem;
                       `}>
                            <p css={css`
                                text-align: center;
                            `}>{votos} Votos</p>
                            { usuario && (
                                <Boton 
                                    onClick={votarProducto}
                                >
                                    Votar
                                </Boton>
                            )}
                       </div>
                    </aside>
                </ContenedorProducto>
                {puedeBorrar() && (
                    <Boton
                        onClick={handleEliminarProducto}
                    >Eliminar Producto</Boton>
                )}
            </div>
          )}
      </Layout>
  )
}

export default Producto