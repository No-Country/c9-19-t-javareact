---

## ADMINISTRADOR - CRUD COMISIONES

---

#### GET http://localhost:8080/api/admin/commission/1
* [Obtener una Comisión]() Puede buscar una comisión por su ID, pasado en el endpoint.

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
---

#### POST http://localhost:8080/api/admin/commission
* [Crear una Comisión]() Puede crear una comisión pasada en el body.

**JSON ENTRADA**
```json
{
  "course": "5°",
  "division": "A",
  "year": 2023,
  "shiftName": "AFTERNOON"
}
```

**JSON REPUESTA**
```json
{
  "idCommission": 3,
  "course": "5°A",
  "year": 2023,
  "shift": "AFTERNOON"
}
```
