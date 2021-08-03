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

###  Response API 

```text
 {
            "info": {
                "_postman_id": "31a90070-e436-42c4-9d46-ceb67bdcb07d",
                "name": "Backend-test",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
            },
            "item": [
                {
                    "name": "Crear envio",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Accept",
                                "value": "application/json"
                            },
                            {
                                "key": "api-key",
                                "value": "ea670047974b650bbcba5dd759baf1ed"
                            },
                            {
                                "key": "Content-Type",
                                "value": "application/json"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"shipping_order\": {\n        \"n_packages\": \"1\",\n        \"content_description\": \"ORDEN 255826267\",\n        \"imported_id\": \"255826267\",\n        \"order_price\": \"24509.0\",\n        \"weight\": \"0.98\",\n        \"volume\": \"1.0\",\n        \"type\": \"delivery\"\n    },\n    \"shipping_origin\": {\n        \"warehouse_code\": \"401\"\n    },\n    \"shipping_destination\": {\n        \"customer\": {\n            \"name\": \"Bernardita Tapia Riquelme\",\n            \"email\": \"b.tapia@outlook.com\",\n            \"phone\": \"977623070\"\n        },\n        \"delivery_address\": {\n            \"home_address\": {\n                \"place\": \"Puente Alto\",\n                \"full_address\": \"SAN HUGO 01324, Puente Alto, Puente Alto\"\n            }\n        }\n    },\n    \"carrier\": {\n        \"carrier_code\": \"\",\n        \"tracking_number\": \"\"\n    }\n}"
                        },
                        "url": {
                            "raw": "https://stage.api.enviame.io/api/s2/v2/companies/401/deliveries",
                            "protocol": "https",
                            "host": [
                                "stage",
                                "api",
                                "enviame",
                                "io"
                            ],
                            "path": [
                                "api",
                                "s2",
                                "v2",
                                "companies",
                                "401",
                                "deliveries"
                            ]
                        }
                    },
                    "response": []
                }
            ],
            "protocolProfileBehavior": {}
        }
```
