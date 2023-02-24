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