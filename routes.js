const express = require('express');
const router = express.Router();
const UsuarioController = require('./controllers/UsuarioController');

router.use('/api', router);

router.get('/usuarios', UsuarioController.listarUsuarios);

module.exports = router;
