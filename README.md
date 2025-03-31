# CRUD_BIBLIOTECA
# 📚 CRUD de Biblioteca!!!

## 📖 Descripción
Este es un sistema CRUD para la gestión de una biblioteca, que permite administrar usuarios, libros, ejemplares, préstamos y reservas de manera eficiente. El sistema está desarrollado con Node.js, Express y MongoDB para el backend, y con HTML, CSS y JavaScript para el frontend.

## 🚀 Características
- 📌 **Usuarios:** Registrar, listar y administrar usuarios.
- 📚 **Libros:** Agregar, visualizar y gestionar libros.
- 📖 **Ejemplares:** Control de la cantidad de ejemplares disponibles.
- 🕐 **Préstamos:** Gestión de préstamos con fechas de inicio y fin.
- 🏷 **Reservas:** Permite a los usuarios reservar libros disponibles.
- 🎨 **Diseño atractivo:** Interfaz moderna con colores pasteles.
- 💾 **Almacenamiento en MongoDB Atlas:** Base de datos en la nube.

## 🛠️ Tecnologías Utilizadas
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose.
- **Frontend:** HTML, CSS (colores pasteles), JavaScript.
- **Herramientas adicionales:** Git, GitHub, PowerShell.

## ⚙️ Instalación y Ejecución
1. **Clonar el repositorio:**
   ```sh
   git clone https:/Saritaidk18diehb/github.com/CRUD_BIBLIOTECA/.git
   cd CRUD_BIBLIOTECA
   ```

2. **Instalar dependencias:**
   ```sh
   cd backend
   npm install
   ```

3. **Configurar las variables de entorno:**
   - Crear un archivo `.env` en la carpeta `backend` con el siguiente contenido:
     ```sh
     MONGODB_URI=mongodb+srv://sofi:1918sr@cluster.mongodb.net/
     PORT=5000
     ```

4. **Iniciar el servidor:**
   ```sh
   node index.js
   ```
   El servidor correrá en `http://localhost:5000`

5. **Probar la API:**
   - Obtener todos los usuarios:
     ```sh
     curl http://localhost:5000/api/usuarios
     ```

## 📂 Estructura del Proyecto
```
CRUD_BIBLIOTECA/
│── backend/
│   ├── models/       # Modelos de MongoDB
│   ├── routes/       # Rutas API
│   ├── .env          # Variables de entorno (no subir a GitHub)
│   ├── index.js      # Servidor principal
│── frontend/
│   ├── index.html    # Interfaz del usuario
│   ├── styles.css    # Estilos (colores pasteles)
│   ├── script.js     # Lógica frontend
│── .gitignore        # Ignorar archivos innecesarios
│── README.md         # Documentación
```

## 📝 Autor
- **Desarrollado por:** [Sarita]
- 🌐 GitHub: [Saritaidk18diehb](https://github.com/Saritaidk18diehb)

## 🎯 Próximos Pasos
✅ Mejorar validaciones en el frontend.
✅ Optimizar la conexión con MongoDB.
✅ Implementar migración a MySQL.

¡Gracias por visitar este proyecto! 🚀

