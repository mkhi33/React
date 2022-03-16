import React, { useEffect } from 'react'
import useNoticias from '../hooks/useNoticias'
import axios from 'axios'
import { CATEGORIAS } from "../constants"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
const Formulario = () => {
    const { categoria, handleChangeCategoria } = useNoticias();




  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
                label="Categoría"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map( categoria => (
                    <MenuItem 
                        key={categoria.value}
                        value={categoria.value}
                    >{categoria.label}</MenuItem>
                ))}    
            </Select>

        </FormControl>
    </form>
  )
}

export default Formulario