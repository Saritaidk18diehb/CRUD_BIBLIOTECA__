const express = require('express');
const Libro = require('../models/Libro');

const router = express.Router();

// ✅ Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        console.error("❌ Error al obtener los libros:", error);
        res.status(500).json({ message: "Error del servidor al obtener los libros" });
    }
});

// ✅ Agregar un nuevo libro
router.post('/', async (req, res) => {
    try {
        const { nombre, anioPublicacion, autor } = req.body;

        // Validación: Todos los campos son obligatorios
        if (!nombre || !anioPublicacion || !autor) {
            return res.status(400).json({ message: "⚠ Todos los campos son obligatorios" });
        }

        // Crear nuevo libro
        const nuevoLibro = new Libro({ nombre, anioPublicacion, autor });
        await nuevoLibro.save();

        res.status(201).json({
            message: "✅ 📚 Libro guardado correctamente",
            libro: nuevoLibro
        });
    } catch (error) {
        console.error("❌ Error al guardar el libro:", error);
        res.status(500).json({ message: "Error del servidor al guardar el libro" });
    }
});

module.exports = router;
