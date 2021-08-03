### Ejercicio 4: Consumo API Envíame para la creación de un envío
Desarrolla una función o script que consuma la API Envíame para la creación de un Envío y almacene la respuesta en algún medio de almacenamiento permanente.
Documentación (Postman) del endpoint a usar: [Colección Postman](https://github.com/enviame/backend-test/blob/main/Backend-test.postman_collection.json)


###  Software requerido
```text
   DOCKER  https://www.docker.com/products/docker-desktop
   VISUAL CODE https://code.visualstudio.com/
```

###  Configuración contenedores NodeJS
```text
  version: "3.8"
services:
  node:
    container_name: nodejs    
    build: .
    ports:
      - 8080:8080
      - 9229:9229
    environment:
      - SERVER_PORT=8080
      - DATABASE_CONNECTIONSTRING=mongodb://mongo:27017/enviame
    volumes:
      - ./:/code
  mongo:
    container_name: mongodb
    image: mongo    
    volumes:
      - ./data:/data/db
    ports:
      - "27017:27017"
```

###  Pasos para crear los contenedores Docker

```text
docker-compose up -d --build
docker-compose up
```

###  Abrir navegador 

```text
http://localhost:8080/listar
```
