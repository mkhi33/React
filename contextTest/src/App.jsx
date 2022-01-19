import { useState } from 'react'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriasContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <CategoriasProvider>
      <h1>Desde APP.jsx</h1>
      <Formulario />
    </CategoriasProvider>
  )
}

export default App
