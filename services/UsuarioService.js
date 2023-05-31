const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../datos/usuarios.json');

const UsuarioService = {
  obtenerUsuarios() {
    const data = fs.readFileSync(dbPath);
    const usuarios = JSON.parse(data).usuarios;
    return usuarios;
  },
};

module.exports = UsuarioService;
