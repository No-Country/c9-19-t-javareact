---

## ADMINISTRADOR - CRUD COMISIONES

---

#### GET http://localhost:8080/api/admin/commission/1
* [Obtener una Comisión]() Puede buscar una comisión por su ID, pasado en el endpoint.

##### Respuestas posibles
* [200 OK]() Se encontró con éxito la comisión.

**JSON ENTRADA**
```json
{
  "idCommission": 1,
  "course": "6°A",
  "year": 2023,
  "shift": "MORNING",
  "studentResponseList": [
    {
      "fullName": "Jazmin Ayala"
    },
    {
      "fullName": "Juan Ramirez"
    }
  ]
}
```
* [404 Not Found]() No se encontró comisión por su ID

---

#### POST http://localhost:8080/api/admin/commission
* [Crear una Comisión]() Puede crear una comisión pasada en el body.

##### Respuestas posibles
* [200 OK]() Comisión Creada con éxito

  **JSON ENTRADA**
```json
{
  "course": "5°",
  "division": "A",
  "year": 2023,
  "shiftName": "AFTERNOON"
}
```

* [400 Bad Request]() Los campos Curso, Division, año, y turno son Obligatorios

**JSON REPUESTA**
```json
{
  "idCommission": 3,
  "course": "5°A",
  "year": 2023,
  "shift": "AFTERNOON"
}
```

---
#### PUT http://localhost:8080/api/admin/commission
* [Actualizar una Comisión]() Puede actualizar una comisión pasada en el body.

**JSON ENTRADA**
```json
{
  "idCommission": 4,
  "course": "1°",
  "division": "A",
  "year": 2023,
  "shiftName": "AFTERNOON"
}
```
##### Respuestas posibles
* [200 OK]() Actualizada con éxito 
**JSON REPUESTA**
```json
{
  "idCommission": 4,
  "course": "1°",
  "division": "A",
  "year": 2023,
  "shiftName": "AFTERNOON"
}
```

* [404 Not Found]() No se encontró comisión por su ID
* [400 Bad Request]() Los campos Curso, Division, año, y turno son Obligatorios
