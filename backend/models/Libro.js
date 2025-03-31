const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, "El nombre del libro es obligatorio"], 
        trim: true 
    },
    anioPublicacion: { 
        type: Number, 
        required: [true, "El año de publicación es obligatorio"], 
        min: [1000, "El año debe ser mayor a 1000"], 
        max: [new Date().getFullYear(), "El año de publicación no puede ser mayor al actual"]
    },
    autor: { 
        type: String, 
        required: [true, "El autor es obligatorio"], 
        trim: true 
    }
}, {
    timestamps: true // ✅ Agrega automáticamente `createdAt` y `updatedAt`
});

module.exports = mongoose.model('Libro', libroSchema);
