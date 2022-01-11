import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';



function App() {

  const [ busquedaletra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');
  const [ info, guardarInfo ] = useState('');
  const [ error, guardarError ] = useState(false);

  useEffect(() => {

    if(Object.keys(busquedaletra).length === 0) return;
    const consultarApiLetra = async ()=> {

      const { artista, cancion } = busquedaletra;

      //const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const apiKey = '660a4395f992ff67786584e238f501aa'
      const URL = `http://api.vagalume.com.br/search.php?apikey=${apiKey}&art=${artista}&mus=${cancion}`;
      const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;


        axios.all([
          axios(URL),
          axios(URL2)
  
        ]).then(axios.spread((letra, informacion) => {
            guardarLetra(letra.data.mus[0].text);
            guardarInfo(informacion.data.artists[0]);
            
          })).catch(error => {
            guardarError(true);
          });
          guardarError(false);

      // Datos de la canción

      
    }
    consultarApiLetra();
  
  }, [busquedaletra])
  return (


    <Fragment>
      <Formulario
        guardarBusquedaLetra = { guardarBusquedaLetra }
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {error ? <p className="alert alert-danger">Bibliografía de artista no fue encontrado</p> :
              <Info 
                info = {info}
              
              />
            
            }
          </div>
          <div className="col-md-6">
            <Cancion
              letra = {letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
