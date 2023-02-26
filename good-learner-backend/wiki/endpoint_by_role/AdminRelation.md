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
#### GET http://localhost:8080/api/admin/relationship/student/7
* [Buscar una Relación]() Puede buscar las relaciones que tiene un estudiante debera enviar en el Endpoint el ID del Estudiante.
* [Respuesta]() Lista de todas las relaciones que tiene el estudiante.

**JSON SALIDA**
```json
[
  {
    "idRelation": 2,
    "idStudent": 7,
    "fullNameStudent": "Juan Ramirez",
    "idTutor": 5,
    "fullNameTutor": "Hugo Hugo",
    "relation": "NEIGHBOR"
  }
]
```

#### GET http://localhost:8080/api/admin/relationship/tutor/5
* [Buscar una Relación]() Puede buscar las relaciones que tiene un tutor debera enviar en el Endpoint el ID del Tutor.
* [Respuesta]() Lista de todas las relaciones que tiene el tutor.

**JSON SALIDA**
```json
[
  {
    "idRelation": 2,
    "idStudent": 7,
    "fullNameStudent": "Juan Ramirez",
    "idTutor": 5,
    "fullNameTutor": "Hugo Hugo",
    "relation": "NEIGHBOR"
  },
  {
    "idRelation": 12,
    "idStudent": 8,
    "fullNameStudent": "Julio Gonzalez",
    "idTutor": 5,
    "fullNameTutor": "Hugo Hugo",
    "relation": "FATHER"
  }
]
```


#### POST http://localhost:8080/api/admin/relationship
* [Crear una Relación]() Puede crear relación entre un estudiante y un profesor, debera enviar el ID del estudiante y tutor, además la relación que los vinculara.
* [Relaciones permitidas]() `FATHER, MOTHER, AUNT, UNCLE, COUSIN, GRANDFATHER, GRANDMOTHER, LEGAL_GUARDIAN, FRIEND, NEIGHBOR, BROTHER, SISTER`

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

#### PUT http://localhost:8080/api/admin/relationship
* [Actualizar una Relación]() Puede actualizar una relación entre un estudiante y un profesor, debera enviar el ID del estudiante y tutor, además la relación que los vinculara. La relación deberá existir para poder ser actualizada.
* [Relaciones permitidas]() `FATHER, MOTHER, AUNT, UNCLE, COUSIN, GRANDFATHER, GRANDMOTHER, LEGAL_GUARDIAN, FRIEND, NEIGHBOR, BROTHER, SISTER`

**JSON ENTRADA**
```json
{
  "idStudent": 7,
  "idTutor": 5,
  "relation": "NEIGHBOR"
}
```

**JSON SALIDA**
```json
{
  "fullNameStudent": "Juan Ramirez",
  "fullNameTutor": "Hugo Hugo",
  "relation": "NEIGHBOR"
}
```

#### DELETE http://localhost:8080/api/admin/relationship/12
* [Eliminar una Relación]() Puede eliminar una relación de base de datos. Solo deberá enviar el ID de la Relación en el Endpoint.

* [Respuesta]() 204 No Content


#### DELETE http://localhost:8080/api/admin/relationship
* [Eliminar una Relación]() Puede eliminar una relación de base de datos. Deberá enviar el ID del estudiante y el ID del Tutor en el Body.

**JSON ENTRADA**
```json
{
  "idStudent": 7,
  "idTutor": 4
}
```
* [Respuesta]() 204 No Content