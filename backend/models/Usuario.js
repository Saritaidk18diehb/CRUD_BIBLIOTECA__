const mongoose = require('mongoose');

// 📌 Esquema para la colección "Usuario"
// Define la estructura de los documentos en la base de datos
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // 🏷️ Nombre del usuario
    apellidos: { type: String, required: true }, // 🏷️ Apellidos del usuario
    celular: { type: String, required: true }, // 📞 Número de celular
    correo: { type: String, required: true, unique: true } // 📧 Correo electrónico (único)
});

// 📤 Exportamos el modelo "Usuario"
module.exports = mongoose.model('Usuario', usuarioSchema);
