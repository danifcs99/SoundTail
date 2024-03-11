# SoundTail
<img src="https://cdn.discordapp.com/attachments/1156658075827187795/1216720431197716670/soundTail-image.png?ex=66016a34&is=65eef534&hm=2810859a22cdd42caa4b8a2919bd25681f5502e24fcae9b98755b6f7bc482fb0" alt="SoundTail" width="200"/>

Bienvenido a la API de SoundTail. Esta API proporciona acceso a diversas funcionalidades relacionadas con Usuarios, Canciones y PlayLists.


## Instalación 

1. Descarga o clone el respositorio.<br>
``` git clone https://github.com/danifcs99/SoundTail.git ```
2. Installar las dependencias.<br>
```npm i ```
3. copiar y configurar archivo env.<br>
```npm run copi:env ```

4. 

## Arquitectura 
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


## Main dependencias 

- ```express``` 
- ```express-openapi```

## Desplegado
-Render<br>
[SoundTail API](https://soundtail.onrender.com)
