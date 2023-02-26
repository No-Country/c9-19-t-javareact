---

## ADMINISTRADOR - CRUD INSCRIPCIÓN DE UN ALUMNO A UNA COMISIÓN

---

#### POST http://localhost:8080/api/admin/inscription
* [Crear una Inscripción]() Puede inscribir un alumno a una comisión.

**JSON ENTRADA**
```json
{
  "inscriptionDate": "2023-02-26",
  "idCommission": 1,
  "idStudent": 7
}
```

**JSON SALIDA**
```json
{
  "idInscription": 8,
  "inscriptionDate": "2023-02-26",
  "idCommission": 1,
  "idStudent": 7
}
```

