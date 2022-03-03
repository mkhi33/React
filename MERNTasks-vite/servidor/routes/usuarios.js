// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioControler = require('../controllers/usuarioController');
const { check } = require('express-validator')

// Crea un usuario
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    usuarioControler.crearUsuario
);

module.exports = router;