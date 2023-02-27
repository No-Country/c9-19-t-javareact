---

## ADMINISTRADOR - CRUD INSCRIPCIÓN DE UN ALUMNO A UNA COMISIÓN

---

#### GET http://localhost:8080/api/admin/inscription/10
* [Obtener una Inscripción]() Puede obtener una inscripción pasando su ID en el endpoint.

**JSON SALIDA**
```json
{
  "idInscription": 10,
  "inscriptionDate": "2023-02-26",
  "idCommission": 1,
  "idStudent": 7
}
```

---

#### POST http://localhost:8080/api/admin/inscription
* [Crear una Inscripción]() Puede crear una inscripción pasando en el body.

**JSON ENTRADA**
```json
{
  "inscriptionDate": "2023-02-26",
  "idCommission": 1,
  "idStudent": 7
}
```
##### Respuestas posibles:

* [200 OK]() Inscription creada con éxito.
**JSON SALIDA**
```json
{
  "idInscription": 11,
  "inscriptionDate": "2023-02-26",
  "idCommission": 1,
  "idStudent": 7
}
```
* [409 Conflict]() El estudiante ya posee inscripción en la comisión

---

#### DELETE http://localhost:8080/api/admin/inscription/10
* [Eliminar una Inscripción]() Puede eliminar una inscripción pasando su ID en el endpoint.

##### Respuesta posibles 
* [204 Not Content]() Eliminado con éxito.

* [404 Not Found]() Inscripción no encontrada.

