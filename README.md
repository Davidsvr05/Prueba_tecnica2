Frontend - Prueba Técnica
Este proyecto es una interfaz en Angular para gestionar usuarios y transacciones. Consume una API RESTful desarrollada con Express.js y PostgreSQL.

Tabla de Contenidos
Instalación

Uso

Estructura del Proyecto

Endpoints de la API

Tecnologías Utilizadas

Autor

Instalación
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

Requisitos
Node.js (v18 o superior)

Angular CLI (v16 o superior)

Pasos
Clona el repositorio:

bash
Copy
git clone https://github.com/tu-usuario/prueba-tecnica.git
cd prueba-tecnica/frontend
Instala las dependencias:

bash
Copy
npm install
Configura la URL de la API en src/environments/environment.ts:

typescript
Copy
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api', // URL del backend
};
Inicia el servidor de desarrollo:

bash
Copy
ng serve
Abre tu navegador y visita:

Copy
http://localhost:4200
Uso
Pantalla de Usuarios
URL: http://localhost:4200/users

Funcionalidades:

Agregar nuevos usuarios.

Listar usuarios registrados.

Ver transacciones de un usuario.

Pantalla de Transacciones
URL: http://localhost:4200/transactions/:userId

Funcionalidades:

Registrar nuevas transacciones (depósitos o retiros).

Listar el historial de transacciones de un usuario.

Estructura del Proyecto
Copy
frontend/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── user-list/                 # Componente para listar usuarios
│   │   │   └── transaction-list/          # Componente para listar transacciones
│   │   ├── services/
│   │   │   ├── user.service.ts            # Servicio para interactuar con la API de usuarios
│   │   │   └── transaction.service.ts     # Servicio para interactuar con la API de transacciones
│   │   ├── models/
│   │   │   ├── user.model.ts              # Modelo de usuario
│   │   │   └── transaction.model.ts       # Modelo de transacción
│   │   ├── app-routing.module.ts          # Configuración de rutas
│   │   ├── app.component.ts               # Componente raíz
│   │   ├── app.component.html             # Plantilla del componente raíz
│   │   ├── app.component.css              # Estilos del componente raíz
│   │   └── app.module.ts                  # Módulo principal
│   ├── assets/                            # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── environments/                      # Configuraciones de entorno
│   └── styles.css                         # Estilos globales
│
├── angular.json                           # Configuración del proyecto Angular
├── package.json                           # Dependencias y scripts del proyecto
└── README.md                              # Documentación del proyecto
Endpoints de la API
Usuarios
GET /api/users: Listar usuarios.

POST /api/users: Crear un usuario.

Transacciones
GET /api/transactions/:userId: Obtener transacciones de un usuario.

POST /api/transactions: Registrar una transacción.

Tecnologías Utilizadas
Frontend:

Angular

TypeScript

HTML/CSS

RxJS

Backend:

Express.js

PostgreSQL

Herramientas:

Angular CLI

Postman (para probar la API)

Autor
Nombre: David Santiago Viloria Romero

Email: david_viloria04@hotmail.com

¡Gracias por revisar mi prueba técnica! Si tienes alguna pregunta o comentario, no dudes en contactarme. 😊

