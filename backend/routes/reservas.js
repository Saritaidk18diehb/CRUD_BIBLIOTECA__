const express = require('express');
const Reserva = require('../models/Reserva');

const router = express.Router();

// ✅ Obtener todas las reservas
router.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error("❌ Error al obtener las reservas:", error);
        res.status(500).json({ message: "Error del servidor al obtener las reservas" });
    }
});

// ✅ Agregar una nueva reserva
router.post('/', async (req, res) => {
    try {
        const { nombre, apellido, diasReserva, libro } = req.body;

        // Validación: Todos los campos son obligatorios
        if (!nombre || !apellido || !diasReserva || !libro) {
            return res.status(400).json({ message: "⚠ Todos los campos son obligatorios" });
        }

        // Validación de número de días de reserva
        if (isNaN(diasReserva) || diasReserva <= 0) {
            return res.status(400).json({ message: "⚠ Los días de reserva deben ser un número válido y mayor a 0" });
        }

        // Buscar reservas activas del mismo libro
        const reservaExistente = await Reserva.findOne({ libro });
        if (reservaExistente) {
            return res.status(400).json({ message: "❌ Por ahora no está libre el libro o el ejemplar que usted busca" });
        }

        // Guardar la nueva reserva
        const nuevaReserva = new Reserva({ nombre, apellido, diasReserva, libro });
        await nuevaReserva.save();

        res.status(201).json({
            message: "✅ 📖 Reserva guardada con éxito",
            reserva: nuevaReserva
        });
    } catch (error) {
        console.error("❌ Error al guardar la reserva:", error);
        res.status(500).json({ message: "Error del servidor al guardar la reserva" });
    }
});

module.exports = router;
