---

## ADMINISTRADOR - CRUD Relacionar Estudiante-Tutor

---

#### Para el consumo de TODOS estos recursos se debe enviar el TOKEN de autorización. Es posible enviarlo de dos maneras:

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
#### GET http://localhost:8080/api/person/relationship
* [Buscar una Relación]() Puede buscar una relación pasando el ID del Estudiante y el ID del Tutor.
* [Relaciones permitidas]() `FATHER, MOTHER, AUNT, UNCLE, COUSIN, GRANDFATHER, GRANDMOTHER, LEGAL_GUARDIAN, FRIEND, NEIGHBOR, BROTHER, SISTER`

**JSON ENTRADA**
```json
{
  "idStudent": 8,
  "idTutor": 1
}
```

**JSON SALIDA**
```json
[
  {
    "idTutorStudent": 6,
    "student": {
      "idPerson": 8,
      "firstName": "Julio",
      "lastName": "Gonzalez",
      "document": "45212367",
      "birthDate": "2012-05-10",
      "email": null,
      "timeStamp": "2023-02-20T21:19:48.209911",
      "phone": null,
      "isRegular": true
    },
    "tutor": {
      "idPerson": 5,
      "firstName": "Hugo",
      "lastName": "Ramirez",
      "document": "22456787",
      "birthDate": "1975-11-15",
      "email": "hugo@gmail.com",
      "timeStamp": "2023-02-20T21:19:48.160778",
      "phone": "+5491159117241",
      "workPhone": "4875-5758"
    },
    "bond": {
      "idBond": 1,
      "bondName": "FATHER"
    }
  }
]
```


#### POST http://localhost:8080/api/person/relationship
* [Crear una Relación]() Puede crear relación entre un estudiante y un profesor, debera enviar el ID del estudiante y tutor, además la relación que los vinculara.
* [Relaciones permitidas]() `FATHER,
  MOTHER,
  AUNT,
  UNCLE,
  COUSIN,
  GRANDFATHER,
  GRANDMOTHER,
  LEGAL_GUARDIAN,
  FRIEND,
  NEIGHBOR,
  BROTHER,
  SISTER`

**JSON ENTRADA**
```json
{
  "idStudent": 7,
  "idTutor": 4,
  "relation": "FATHER"
}
```

**JSON SALIDA**
```json
{
  "fullNameStudent": "Juan Ramirez",
  "fullNameTutor": "David David",
  "relation": "FATHER"
}
```