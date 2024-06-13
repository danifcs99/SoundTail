# Proyecto SoundTail
Sound Tail es una aplicación de reproducción de música diseñada para ofrecer una experiencia única y personalizada para los amantes de la música. Con Sound Tail, puedes descubrir, reproducir y gestionar tus canciones favoritas de manera sencilla y eficiente.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1156658075827187795/1250913142259585064/logo1.jpg?ex=666cab25&is=666b59a5&hm=704f13da36218cf6231318e83f1dcb8913bfbb33469f158987d332c965525980&" alt="Captura de Pantalla 1" width="400">
</p>

## 1. Diseño

### 4.1. Presentación de la solución
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1156658075827187795/1250914452283588749/image.png?ex=666cac5e&is=666b5ade&hm=35f6d1d8b9c1102ee4bf2157e3918c75a8d8cb43726c15e4a17aa9b556b5068a&" alt="Captura de Pantalla 2" width="800">
</p>
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1156658075827187795/1250926121021603960/image.png?ex=666cb73c&is=666b65bc&hm=8da13565c5958d2c6cae09cee0c1eda4a9c58c1149bde16b0a10a7377fe55301&" alt="Captura de Pantalla 2" width="800">
</p>
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1156658075827187795/1250926640368979968/image.png?ex=666cb7b8&is=666b6638&hm=60ed91f2f112e561b7dbb6b37e8d0ede76b3a826be5bc795c57832e8ce8617d8&" alt="Captura de Pantalla 2" width="800">
</p>

#### Justificación del stack tecnológico

- Se eligió utilizar Node.js y React.js debido a su escalabilidad y robustez para aplicaciones web modernas.

#### Descripción de la arquitectura

- La arquitectura sigue un patrón MVC en el backend y un enfoque de componentes en el frontend, asegurando una separación clara de responsabilidades.

### 4.2. Diseño de la Interfaz Web

#### Descripción y justificación del diseño

- Se optó por una interfaz intuitiva y minimalista para facilitar la navegación del usuario, utilizando una paleta de colores suaves y una tipografía legible.

### 4.3. Desarrollo del Entorno Cliente (Front-end)

#### Alcance y funcionalidad

- El frontend permite la reproducción de música en tiempo real, gestión de listas de reproducción, búsqueda de las canciones y apartado para poder guardar las canciones 'Like Songs'.

#### Descripción de la estructura

- El código frontend está organizado en componentes reutilizables y sigue las mejores prácticas de desarrollo React.
```
client/
└── soundtail/
├── node_modules/
├── public/
│ ├── Songs/
│ ├── index.html
│ ├── logo.png
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── footer.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── LikedSongsPage.jsx
│ │ ├── Login.jsx
│ │ ├── Player1.jsx
│ │ ├── SongCard.jsx
│ │ └── SongList.jsx
│ ├── utils/
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ └── tailwind.config.js
```

### 4.4. Desarrollo del Entorno Servidor (Back-end)

#### Descripción de la estructura

- El backend se estructura en controladores RESTful, servicios y modelos de datos que gestionan la lógica de negocio y la interacción con la base de datos.

#### Documentación del servicio mediante Postman

- La colección de Postman para la API de Sound Tail se encuentra [Descarga aqui](https://cdn.discordapp.com/attachments/1156658075827187795/1250922249746382919/SoundTail-Postman?ex=666cb3a1&is=666b6221&hm=7ed8ccdc78e7df3e882bb98d25cedbd33430ef6da2c01fb6ce4f6d2c9544b4d8&).

#### Arquitectura 
```
📦 server
 ┣ 📂 .node_modules
 ┣ 📂 src
    ┣ 📂 config
       ┣ 📜 morgan.js
    ┣ 📂 controllers
       ┣ 📜 login-controller.js
       ┣ 📜 playlist-controller.js
       ┣ 📜 users-controller.js
    ┣ 📂 loaders
       ┣ 📜 express-loader.js
       ┣ 📜 index.js
       ┣ 📜 mongodb-loader.js
    ┣ 📂 middlewares
       ┣ 📜 admin-middleware.js
       ┣ 📜 auth-middleware.js
       ┣ 📜 error-middleware.js
       ┣ 📜 query-middleware.js
    ┣ 📂 openapi
       ┣ 📜 examples.yml
       ┣ 📜 index.js
       ┣ 📜 paths.yml
       ┣ 📜 responses.yml
       ┣ 📜 schemas.yml
       ┣ 📜 security.js
       ┣ 📂 models
          ┣ 📜 index.js
          ┣ 📜 Playlist.js
          ┣ 📜 Song.js
          ┣ 📜 User.js
       ┣ 📂 routes
          ┣ 📜 index.js
          ┣ 📜 login-routes.js
          ┣ 📜 playlist-routes.js
          ┣ 📜 song-routes.js
          ┣ 📜 user-routes.js
       ┣ 📂 services
          ┣ 📜 playlist-db-services.js
          ┣ 📜 song-db-services.js
          ┣ 📜 user-db-services.js
    ┣ 📜 app.js
    ┣ 📜 config.js
    ┗ 📜 index.js
 ┣ 📜 .editorconfig
 ┣ 📜 .env
 ┣ 📜 .env.template
 ┣ 📜 .gitignore
 ┣ 📜 eslintrc.json
 ┣ 📜 README.md
 ┣ 📜 package-lock.json
 ┗ 📜 package.json
```
### 4.5. Base de datos

#### Diagrama UML con modelo relacional
```
 ---------------------------
|          User             |
 ---------------------------
| _id: ObjectId             |
| name: String              |
| email: String             |
| password: String (hashed) |
| likeSongs: Array          |
| playlist: Array           |
| role: String              |
| createdAt: Date           |
| updatedAt: Date           |
| __v: Number               |
 ---------------------------

 ---------------------------
|          Song             |
 ---------------------------
| _id: ObjectId             |
| name: String              |
| artist: String            |
| file: String              |
| img: String               |
| duration: String         |
| createdAt: Date           |
| updatedAt: Date           |
| __v: Number               |
 ---------------------------

 ---------------------------
|        Playlist           |
 ---------------------------
| _id: ObjectId             |
| name: String              |
| songs: Array              |
| owner: ObjectId (User)    |
| createdAt: Date           |
| updatedAt: Date           |
| __v: Number               |
 ---------------------------
```

## 4.6. Despliegue de la Aplicación Web

### Frontend (Vercel)

El frontend de la aplicación está desplegado en Vercel, una plataforma de hosting para aplicaciones web estáticas y dinámicas. Puedes acceder al sitio web público utilizando el siguiente enlace:

- **Enlace al Frontend en Vercel:** [SoundTail FrontEnd](https://soundtail.vercel.app/)

### Backend (Render)

El backend de la aplicación está desplegado en Render, una plataforma de hosting para aplicaciones y servicios en la nube. A continuación, encontrarás información sobre cómo acceder y utilizar los servicios del backend:

- **URL del Backend en Render:** [SoundTail Backend](https://soundtail.onrender.com)


