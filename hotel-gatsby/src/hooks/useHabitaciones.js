import { graphql, useStaticQuery} from 'gatsby'


const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacione {
                nodes {
                    titulo
                    contenido
                    slug
                    id
                    imagen {
                        fluid(maxWidth:1200) {
                            ...GatsbyDatoCmsFluid
                        } 
                    }
                 }
            }   
        }
    `)
    return data.allDatoCmsHabitacione.nodes.map( habitacion => ({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        id: habitacion.id,
        imagen: habitacion.imagen,
    }))

}

export default useHabitaciones