import { useState } from 'react'
import CategoriasProvider from './context/CategoriasContext'
import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {


  return (
    <CategoriasProvider>
      <Header
      
      />
      <div className="container mt-5">
        <div className="row">
          <Formulario

          />
        </div>
      </div>
    </CategoriasProvider>
  )
}

export default App
