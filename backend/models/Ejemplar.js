const mongoose = require('mongoose');

const ejemplarSchema = new mongoose.Schema({
    libro: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Libro', 
        required: [true, "El libro es obligatorio"] 
    },
    cantidad: { 
        type: Number, 
        required: [true, "La cantidad de ejemplares es obligatoria"], 
        min: [1, "Debe haber al menos 1 ejemplar"] 
    }
}, {
    timestamps: true // ✅ Agrega automáticamente `createdAt` y `updatedAt`
});

module.exports = mongoose.model('Ejemplar', ejemplarSchema);
