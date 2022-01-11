import React, {useState} from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color:#FFFFFF;
  padding: 3rem;

`;




function App() {
  const [ resumen , guardarResumen ] = useState( {
    cotizacion: 0,
    datos: {
      marca: '',
      year: '', 
      plan: ''

    }
  } );

  const [cargando, guardarCargando] = useState(false);

  //Extraer datos 
  const { cotizacion, datos } = resumen;

  return (
  
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen = { guardarResumen }
          guardarCargando = {guardarCargando}
        />
        {cargando ? <Spinner/> : null}
        

        <Resumen
          datos = { datos }
        />

        {!cargando ?
          <Resultado
            cotizacion= {cotizacion}
          />
         : null}


      </ContenedorFormulario>
    
    </Contenedor>
 
  );
}

export default App;
