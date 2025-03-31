const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();

// ✅ Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("❌ Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error del servidor al obtener usuarios" });
    }
});

// ✅ Agregar un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { nombre, apellidos, celular, correo } = req.body;

        // Validación: Todos los campos son obligatorios
        if (!nombre || !apellidos || !celular || !correo) {
            return res.status(400).json({ message: "⚠ Todos los campos son obligatorios" });
        }

        // Crear nuevo usuario
        const nuevoUsuario = new Usuario({ nombre, apellidos, celular, correo });
        await nuevoUsuario.save();

        res.status(201).json({
            message: "✅ Usuario guardado correctamente",
            usuario: nuevoUsuario
        });
    } catch (error) {
        console.error("❌ Error al guardar usuario:", error);
        res.status(500).json({ message: "Error del servidor al guardar usuario" });
    }
});

module.exports = router;
