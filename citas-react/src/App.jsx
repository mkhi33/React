import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import React, {useState, useEffect} from "react"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( pacienteState => pacienteState.id != id )
    setPacientes(pacientesActualizados)
  }

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect( ()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }

        />
      </div>

    </div>
  )
}

export default App
