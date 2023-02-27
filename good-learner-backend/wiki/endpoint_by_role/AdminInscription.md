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
