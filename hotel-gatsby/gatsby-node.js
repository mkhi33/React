const { reporter } = require("gatsby/node_modules/gatsby-cli/lib/reporter/reporter")
const path = require(`path`)


exports.createPages = async ({ graphql, actions}) => {

    const habitacionTemplate = path.resolve(`src/components/Habitaciones.js`)
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacione {
                nodes {
                    slug
                }
            }
        }
    `)
    //console.log(resultado.data.allDatoCmsHabitaciones.nodes)
    if( resultado.erros ) {
        reporter.panic('No hubo resultados ', resultado.erros)
    }
    // Si hay páginas crear los archivos

    const habitaciones = resultado.data.allDatoCmsHabitacione.nodes;
    habitaciones.forEach( habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: habitacionTemplate,
            context: {
                slug: habitacion.slug
            }
        })
    })
    
  }