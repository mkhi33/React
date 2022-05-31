import * as React from "react"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import ImagenHotel from "../components/ImagenHotel"
import ContenidoInicio from "../components/ContenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"
import HabitacionPreview from "../components/HabitacionPreview"
import styled from "@emotion/styled"
// styles

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }

`

// data

// markup
const IndexPage = () => {

    const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>Nuestras Habitaciones</h2>
      <ListadoHabitaciones>
        {habitaciones.map( habitacion => (
          <HabitacionPreview key={habitacion.id} habitacion={habitacion} />
        ))}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
