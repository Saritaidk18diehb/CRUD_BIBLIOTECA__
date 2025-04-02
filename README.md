# CRUD Biblioteca - Conexión con MongoDB

## Descripción
Este proyecto implementa un CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar una biblioteca, utilizando **MongoDB** como base de datos. Permite administrar usuarios, libros, ejemplares, préstamos y reservas de manera eficiente.

## Tecnologías utilizadas
- **Backend:** Node.js con Express
- **Base de datos:** MongoDB con Mongoose
- **Frontend:** HTML, CSS, JavaScript
- **Control de versiones:** Git y GitHub

## Características principales
✅ Formulario dinámico que cambia según el tipo de dato seleccionado (usuario, libro, ejemplar, préstamo o reserva).  
✅ Validaciones en el backend para evitar datos vacíos o repetidos.  
✅ Almacenamiento de datos en **MongoDB Compass** y actualización en tiempo real en una tabla.  
✅ Diseño profesional con colores pasteles y estilo moderno.  
✅ Conexión a MongoDB Atlas para almacenamiento en la nube.  
✅ Implementación de ID consecutivos en lugar de ObjectId de MongoDB.  
✅ Gestión de errores y notificaciones en pantalla sin ventanas de alerta.  

## Instalación y configuración
1. **Clonar el repositorio:**
   ```bash
   git clone -b conexion-mongo https://github.com/Saritaidk18diehb/CRUD_BIBLIOTECA__.git
   cd CRUD_BIBLIOTECA__
   ```

2. **Instalar dependencias:**
   ```bash
   cd backend
   npm install
   ```

3. **Configurar la base de datos:**
   - Crear una base de datos en **MongoDB Compass** o **MongoDB Atlas**.
   - Configurar la cadena de conexión en `backend/config/database.js`.

4. **Iniciar el servidor:**
   ```bash
   npm start
   ```

5. **Abrir el frontend:**
   - Abrir `index.html` en un navegador o utilizar Live Server en VS Code.

## Endpoints principales
| Método | Endpoint           | Descripción |
|---------|-------------------|-------------|
| GET     | /usuarios         | Obtiene todos los usuarios |
| POST    | /usuarios         | Agrega un nuevo usuario |
| GET     | /libros           | Obtiene todos los libros |
| POST    | /libros           | Agrega un nuevo libro |
| PUT     | /libros/:id       | Edita un libro existente |
| DELETE  | /libros/:id       | Elimina un libro por su ID |
| POST    | /prestamos        | Registra un préstamo |
| POST    | /reservas         | Registra una reserva |

## Contribución
Si deseas contribuir al proyecto:
1. Crea un **fork** del repositorio.
2. Crea una nueva rama: `git checkout -b mi-rama`
3. Realiza cambios y haz commits.
4. Envía un pull request para revisión.

## Licencia
Este proyecto se distribuye bajo la licencia **MIT**.

