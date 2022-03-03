// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authControler = require('../controllers/authController')

const { check } = require('express-validator')

// Crea un usuario
router.post('/',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    authControler.autenticarUsuario
);

module.exports = router;