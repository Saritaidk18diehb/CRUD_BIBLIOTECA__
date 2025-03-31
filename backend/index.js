// Mostrar el directorio actual para verificar dónde se ejecuta el archivo
console.log("📂 Directorio actual:", __dirname);

// Cargar variables de entorno desde .env
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Verificar si la URI de MongoDB se está leyendo correctamente
if (!process.env.MONGODB_URI) {
    console.error("❌ ERROR: No se encontró la URI de MongoDB. Verifica tu archivo .env.");
    process.exit(1); // Detener la ejecución si no hay conexión
}

console.log("✅ MongoDB URI cargada correctamente.");

// Importar módulos
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(error => {
        console.error('❌ Error al conectar con MongoDB:', error);
        process.exit(1);
    });

// Rutas
try {
    app.use('/api/usuarios', require('./routes/usuarios'));
    app.use('/api/libros', require('./routes/libros'));
    app.use('/api/ejemplares', require('./routes/ejemplares'));
    app.use('/api/prestamos', require('./routes/prestamos'));
    app.use('/api/reservas', require('./routes/reservas'));
} catch (error) {
    console.error("❌ Error al cargar las rutas:", error);
    process.exit(1);
}

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('📚 Bienvenido al CRUD de la Biblioteca 📚');
});

// Manejo de errores en rutas no definidas
app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
