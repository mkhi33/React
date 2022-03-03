const express = require('express');
const conectarDB = require('./config/db')
// Creae el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({extended: true}));

// Puerto de la APP
const PORT = process.env.PORT || 4000;

// Definir la página principal
app.get('/', (req, res) => {
    res.send("MERN TASKS")
})

// Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// Arrancar la app

app.listen(PORT, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})
