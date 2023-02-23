---

## ESTUDIANTE - Rutas Protegidas

---
#### GET http://localhost:8080/api/student/report
* [Boletín de un Estudiante](). El estudiante logueado, podrá acceder al boletín de calificaciones del año en que se encuentra cursando.
* NOTA: Recordar que se debe ingresar con el token de autentificación.
##### Es posible enviarlo de dos maneras:

* [Headers]()
```
KEY: Authorization
VALUE: Bearer <token>
```
* [Authorization]()
```
TYPE: Bearer Token
TOKEN: <token>
```

**JSON ENTRADA**
```json
{
  "year": 2023
}
```

**JSON SALIDA**
```json
{
  "fullName": "Agustin Ramirez",
  "course": "6°A",
  "qualifications": [
    {
      "subject": "MATHEMATICS",
      "periodoName": "FIRST_TRIMESTER",
      "numberQualification": 7
    },
    {
      "subject": "MATHEMATICS",
      "periodoName": "SECOND_TRIMESTER",
      "numberQualification": 8
    },
    {
      "subject": "MATHEMATICS",
      "periodoName": "THIRD_TRIMESTER",
      "numberQualification": 9
    },
    {
      "subject": "LITERATURE",
      "periodoName": "FIRST_TRIMESTER",
      "numberQualification": 8
    },
    {
      "subject": "LITERATURE",
      "periodoName": "SECOND_TRIMESTER",
      "numberQualification": 8
    },
    {
      "subject": "LITERATURE",
      "periodoName": "THIRD_TRIMESTER",
      "numberQualification": 8
    }
  ]
}
```