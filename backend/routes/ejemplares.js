const express = require('express');
const Ejemplar = require('../models/Ejemplar');

const router = express.Router();

// ✅ Obtener todos los ejemplares
router.get('/', async (req, res) => {
    try {
        const ejemplares = await Ejemplar.find();
        res.status(200).json(ejemplares);
    } catch (error) {
        console.error("❌ Error al obtener los ejemplares:", error);
        res.status(500).json({ message: "Error del servidor al obtener los ejemplares" });
    }
});

// ✅ Agregar un nuevo ejemplar
router.post('/', async (req, res) => {
    try {
        const { libroId, cantidad } = req.body;

        // Validación: Todos los campos son obligatorios
        if (!libroId || !cantidad) {
            return res.status(400).json({ message: "⚠ Todos los campos son obligatorios" });
        }

        // Validar que la cantidad sea un número mayor a 0
        if (isNaN(cantidad) || cantidad <= 0) {
            return res.status(400).json({ message: "⚠ La cantidad debe ser un número mayor a 0" });
        }

        // Crear nuevo ejemplar
        const nuevoEjemplar = new Ejemplar({ libroId, cantidad });
        await nuevoEjemplar.save();

        res.status(201).json({
            message: "✅ 📚 Ejemplar guardado correctamente",
            ejemplar: nuevoEjemplar
        });
    } catch (error) {
        console.error("❌ Error al guardar el ejemplar:", error);
        res.status(500).json({ message: "Error del servidor al guardar el ejemplar" });
    }
});

module.exports = router;
