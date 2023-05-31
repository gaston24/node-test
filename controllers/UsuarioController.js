const UsuarioService = require('../services/UsuarioService');

const UsuarioController = {
  listarUsuarios(req, res) {
    const usuarios = UsuarioService.obtenerUsuarios();
    res.json(usuarios);
  },
};

module.exports = UsuarioController;
