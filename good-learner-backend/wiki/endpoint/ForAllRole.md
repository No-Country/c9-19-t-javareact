---

## SIN IMPORTAR ROL - RUTA PROTEGIDAS

---
#### GET http://localhost:8080/api/person/report
* [Boletín de un Estudiante](). Una persona logeada, podrá acceder al boletín de calificaciones de un Estudiante en particular.
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
  "idStudent": 5,
  "schoolYear": 2023
}
```

**JSON SALIDA**
```json
{
  "fullName": "Juan Ramirez",
  "course": "6°6°",
  "yearSchool": 2023,
  "subjectQualificationsList": [
    {
      "subjectName": "MATHEMATICS",
      "qualifications": {
        "SECOND_TRIMESTER": 8,
        "FIRST_TRIMESTER": 7,
        "THIRD_TRIMESTER": 9
      }
    },
    {
      "subjectName": "LITERATURE",
      "qualifications": {
        "SECOND_TRIMESTER": 8,
        "FIRST_TRIMESTER": 8,
        "THIRD_TRIMESTER": 8
      }
    }
  ]
}

```
---
#### GET http://localhost:8080/api/tutor/students/4
* [Estudiantes a cargo de un tutor](). Una tutor lo admin ogeada, podrá acceder a los estudiantes que tiene a cargo un tutor específico.
* NOTA: Recordar que se debe ingresar con el token de autentificación.


**JSON SALIDA**
```json
[
  {
    "idPerson": 6,
    "firstName": "Jazmin",
    "lastName": "Ayala",
    "document": "41787181",
    "idTutorStudent": 1,
    "regular": true
  },
  {
    "idPerson": 7,
    "firstName": "Agustin",
    "lastName": "Ramirez",
    "document": "51778181",
    "idTutorStudent": 2,
    "regular": true
  }
]
```