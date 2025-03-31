const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, "El nombre es obligatorio"], 
        trim: true 
    },
    apellidos: { 
        type: String, 
        required: [true, "Los apellidos son obligatorios"], 
        trim: true 
    },
    celular: { 
        type: String, 
        required: [true, "El celular es obligatorio"], 
        match: [/^\d{10}$/, "El celular debe tener 10 dígitos"]
    },
    correo: { 
        type: String, 
        required: [true, "El correo es obligatorio"], 
        unique: true, 
        trim: true, 
        lowercase: true, 
        match: [/^\S+@\S+\.\S+$/, "El correo no tiene un formato válido"]
    }
}, {
    timestamps: true // ✅ Agrega automáticamente `createdAt` y `updatedAt`
});

module.exports = mongoose.model('Usuario', usuarioSchema);
