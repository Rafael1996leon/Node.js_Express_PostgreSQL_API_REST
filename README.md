# 🚀 API REST CRUD - Node.js + Express + PostgreSQL

Sistema de gestión de usuarios con API REST desarrollado en Node.js, Express y PostgreSQL.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Endpoints de la API](#endpoints-de-la-api)
- [Pruebas con Postman](#pruebas-con-postman)
- [Interfaz Web](#interfaz-web)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## ✨ Características

- ✅ API REST completa con operaciones CRUD
- ✅ Conexión a base de datos PostgreSQL
- ✅ Validación de datos
- ✅ CORS habilitado
- ✅ Interfaz web opcional para pruebas
- ✅ Manejo de errores

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [PostgreSQL](https://www.postgresql.org/download/) (versión 12 o superior)
- [Postman](https://www.postman.com/downloads/) (opcional, para pruebas)
- [Git](https://git-scm.com/) (opcional)

## 🔧 Instalación

### 1. Clonar o descargar el proyecto

```bash
# Si usas Git
git clone <url-del-repositorio>
cd crud-api

# O crea la carpeta manualmente
mkdir crud-api
cd crud-api
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:
- `express`: Framework web
- `pg`: Cliente de PostgreSQL
- `cors`: Middleware para CORS
- `nodemon`: Herramienta de desarrollo (opcional)

## ⚙️ Configuración

### 1. Configurar Base de Datos

Abre **psql** o **pgAdmin** y ejecuta:

```sql
-- Crear base de datos
CREATE DATABASE usuarios_db;

-- Conectar a la base de datos
\c usuarios_db

-- Crear tabla de usuarios
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  correo VARCHAR(100),
  contraseña VARCHAR(100)
);
```

### 2. Configurar Conexión

Edita el archivo `db.js` y actualiza las credenciales:

```javascript
export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',        // TU USUARIO
  password: 'tu_password',  // TU CONTRASEÑA
  database: 'usuarios_db',
});
```

## 📁 Estructura del Proyecto

```
crud-api/
│
├── server.js           # Servidor principal y rutas
├── db.js              # Configuración de PostgreSQL
├── package.json       # Dependencias y scripts
├── index.html         # Interfaz web (opcional)
└── README.md          # Documentación
```

## 🚀 Uso

### Iniciar el servidor

```bash
# Modo normal
npm start

# Modo desarrollo (con nodemon)
npm run dev
```

El servidor estará disponible en: **http://localhost:3000**

## 📡 Endpoints de la API

### Base URL
```
http://localhost:3000
```

### Endpoints Disponibles

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| GET | `/` | Mensaje de bienvenida | - |
| POST | `/usuarios` | Registrar nuevo usuario | JSON |
| GET | `/usuarios` | Listar todos los usuarios | - |

### Ejemplos de Uso

#### 1. Registrar Usuario (POST)

**Endpoint:** `POST http://localhost:3000/usuarios`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@email.com",
  "contraseña": "12345"
}
```

**Respuesta Exitosa (201):**
```json
{
  "mensaje": "Usuario registrado exitosamente",
  "usuario": {
    "id": 1,
    "nombre": "Juan Pérez",
    "correo": "juan@email.com",
    "contraseña": "12345"
  }
}
```

#### 2. Listar Usuarios (GET)

**Endpoint:** `GET http://localhost:3000/usuarios`

**Respuesta Exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "correo": "juan@email.com",
    "contraseña": "12345"
  },
  {
    "id": 2,
    "nombre": "María López",
    "correo": "maria@email.com",
    "contraseña": "password123"
  }
]
```

## 🧪 Pruebas con Postman

### Configuración Rápida

1. **Abrir Postman**
2. **Crear nueva petición**
3. **Configurar según el endpoint deseado**

### Ejemplo: POST Registrar Usuario

1. Método: `POST`
2. URL: `http://localhost:3000/usuarios`
3. Headers:
   - Key: `Content-Type`
   - Value: `application/json`
4. Body → raw → JSON:
```json
{
  "nombre": "Ana García",
  "correo": "ana@email.com",
  "contraseña": "ana123"
}
```
5. Click en **Send**

### Ejemplo: GET Listar Usuarios

1. Método: `GET`
2. URL: `http://localhost:3000/usuarios`
3. Click en **Send**

## 🖥️ Interfaz Web

El proyecto incluye una interfaz web opcional en `index.html`.

### Acceder a la Interfaz

1. Asegúrate de que el servidor esté corriendo
2. Abre tu navegador en: **http://localhost:3000**
3. Usa el formulario para registrar usuarios
4. Haz click en "Ver Lista de Usuarios" para actualizar la lista

### Características de la Interfaz

- ✅ Formulario de registro intuitivo
- ✅ Validación de campos
- ✅ Vista en tiempo real de usuarios registrados
- ✅ Mensajes de éxito/error
- ✅ Diseño responsive

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución JavaScript
- **Express** - Framework web minimalista
- **PostgreSQL** - Base de datos relacional
- **pg** - Cliente PostgreSQL para Node.js
- **CORS** - Middleware para habilitar CORS
- **HTML/CSS/JavaScript** - Interfaz web

## 📝 Scripts Disponibles

```bash
# Iniciar servidor en modo producción
npm start

# Iniciar servidor en modo desarrollo (con nodemon)
npm run dev
```

## 🔍 Solución de Problemas

### Error: "Cannot find module"
```bash
npm install
```

### Error: "ECONNREFUSED" (PostgreSQL)
- Verifica que PostgreSQL esté corriendo
- Verifica las credenciales en `db.js`
- Verifica que la base de datos `usuarios_db` exista

### Error: "Port 3000 already in use"
```bash
# Cambiar el puerto en server.js
const PORT = 3001; // O cualquier otro puerto disponible
```

### La interfaz web no carga
- Verifica que `index.html` esté en la raíz del proyecto
- Verifica que `express.static()` esté configurado en `server.js`

## 📚 Próximas Mejoras

- [ ] Agregar autenticación con JWT
- [ ] Implementar hash de contraseñas (bcrypt)
- [ ] Agregar endpoints PUT y DELETE
- [ ] Validación de datos con express-validator
- [ ] Variables de entorno con dotenv
- [ ] Paginación en listado de usuarios
- [ ] Búsqueda y filtros
- [ ] Documentación con Swagger


---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub
