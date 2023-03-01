---

## ADMINISTRADOR - ASIGNATURAS DE COMISIONES

---

#### PUT http://localhost:8080/api/admin/commission/subject/teacher
* [Obtener una Comisión]() Puede asignar un profesor a una materia de una comisión.

##### Respuestas posibles
* [200 OK]() Se actualizó con éxito el profesor de una materia.

**JSON ENTRADA**
```json
{
  "idCommissionSubject": 1,
  "idTeacher": 2
}
```
**JSON ENTRADA**
```json
{
  "idCommissionSubject": 1,
  "idSubject": 2,
  "idTeacher": 2,
  "idCommission": 1,
  "dayName": "MONDAY",
  "starTime": "07:30:00",
  "endTime": "09:30:00"
}
```

* [404 Not Found]() No se encontró una asignatura de una comisión por su ID
* [404 Not Found]() No se encontró el profesor por su ID.