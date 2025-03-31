const express = require('express');
const Prestamo = require('../models/Prestamo');

const router = express.Router();

// ✅ Obtener todos los préstamos
router.get('/', async (req, res) => {
    try {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    } catch (error) {
        console.error("❌ Error al obtener los préstamos:", error);
        res.status(500).json({ message: "Error del servidor al obtener los préstamos" });
    }
});

// ✅ Agregar un nuevo préstamo
router.post('/', async (req, res) => {
    try {
        const { nombre, apellido, libro, diaPrestamo, finPrestamo } = req.body;

        // Validación: Todos los campos son obligatorios
        if (!nombre || !apellido || !libro || !diaPrestamo || !finPrestamo) {
            return res.status(400).json({ message: "⚠ Todos los campos son obligatorios" });
        }

        // Validar formato de fecha
        const inicio = new Date(diaPrestamo);
        const fin = new Date(finPrestamo);
        if (isNaN(inicio.getTime()) || isNaN(fin.getTime())) {
            return res.status(400).json({ message: "⚠ Formato de fecha inválido. Usa YYYY-MM-DD." });
        }

        // Validar que la fecha de fin sea posterior a la de inicio
        if (fin <= inicio) {
            return res.status(400).json({ message: "⚠ La fecha de fin debe ser posterior a la de inicio." });
        }

        // Crear nuevo préstamo
        const nuevoPrestamo = new Prestamo({ nombre, apellido, libro, diaPrestamo, finPrestamo });
        await nuevoPrestamo.save();

        res.status(201).json({
            message: "✅ 📖 Préstamo guardado correctamente",
            prestamo: nuevoPrestamo
        });
    } catch (error) {
        console.error("❌ Error al guardar el préstamo:", error);
        res.status(500).json({ message: "Error del servidor al guardar el préstamo" });
    }
});

module.exports = router;
