const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
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
    fechaInicio: { 
        type: Date, 
        required: [true, "Debe ingresar una fecha de inicio"], 
        default: Date.now 
    },
    fechaFin: { 
        type: Date, 
        required: [true, "Debe ingresar una fecha de devolución"],
        validate: {
            validator: function(value) {
                return value > this.fechaInicio; // 📌 Valida que la fecha de devolución sea posterior a la de inicio.
            },
            message: "La fecha de devolución debe ser posterior a la fecha de inicio"
        }
    }
}, {
    timestamps: true // ✅ Agrega automáticamente `createdAt` y `updatedAt`
});

module.exports = mongoose.model('Prestamo', prestamoSchema);
