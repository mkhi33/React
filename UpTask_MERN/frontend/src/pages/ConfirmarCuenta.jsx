import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () => {
  const params = useParams()
  const { id } = params
  const [ alerta, setAlerta ] = useState({})
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false)

  useEffect( ()=> {
    const confirmarCuenta = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/confirmar/${id}`
        const { data } = await axios(url)
        setAlerta({
          msj: data.msj,
          error: false
        })
        setCuentaConfirmada(true)
      } catch (error) {
        setAlerta({
          msj: error.response.data.msj,
          error: true
        })
      }
    }
    confirmarCuenta()
  }, [])

  const { msj } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
          Confirma Tu Cuenta y Comienza a Crear tus
          <span className="text-slate-700"> proyectos</span>
      </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msj && <Alerta alerta={alerta} />}
        { cuentaConfirmada && (
          <Link
            to="/"
            className="block text-center  text-slate-500 uppercase text-sm"
      
          >Inicia Sesión</Link>
        )}
      </div>

    </>
  )
}

export default ConfirmarCuenta