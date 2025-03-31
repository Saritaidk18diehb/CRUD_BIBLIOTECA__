const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: [true, "El usuario es obligatorio"] 
    },
    libro: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Libro', 
        required: [true, "El libro es obligatorio"] 
    },
    diasReserva: { 
        type: Number, 
        required: [true, "Debe ingresar los días de reserva"], 
        min: [1, "Debe reservar al menos 1 día"] // ✅ Valida que el mínimo sea 1 día
    }
}, {
    timestamps: true // ✅ Agrega automáticamente `createdAt` y `updatedAt`
});

module.exports = mongoose.model('Reserva', reservaSchema);
