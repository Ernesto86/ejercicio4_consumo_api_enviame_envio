exports.listarEnvios = (req, res) => {
    res.json(
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
    ); 
};