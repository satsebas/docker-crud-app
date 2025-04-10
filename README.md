#  Docker CRUD App

Proyecto Fullstack contenedorizado con Docker, compuesto por:
- Frontend (HTML + JS)
- Backend (Node.js + Express)
- Base de datos (MySQL)
- Gestor de base de datos (Adminer)


## puertos usudos por el proyecto

fronted: 5173:80
backend: 3000:3000
adminer: 8080:8080
mysql:   3306:3306

puertos usados
  ## 🔐 Credenciales


- **Usuario MySQL**: `root`
- **Contraseña MySQL**: `123456`
- **Base de datos**: `crud_db`

- Adminer (interfaz web):
- URL: http://localhost:8080
- Servidor: `db` (o `mysql-container`)
- Usuario: `root`
- Contraseña: `123456`
- Base de datos: `crud_db`

##  Endpoints del Backend

| Método | Ruta             | Descripción                        |
|--------|------------------|------------------------------------|
| GET    | `/usuarios`     | Obtener todos los registros        |
| POST   | `/usuarios`     | Crear un nuevo registro            |
| PUT    | `/usuarios/:id` | Actualizar un registro existente   |
| DELETE | `/usuarios/:id` | Eliminar un registro               |
