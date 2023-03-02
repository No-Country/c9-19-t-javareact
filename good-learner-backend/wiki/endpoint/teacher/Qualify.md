---

## PROFESOR - Rutas Protegidas

---
#### POST http://localhost:8080/api/teacher/qualification
* [Calificar Estudiante](). El profesor podrá calificar a un estudiante colocándole nota numérica a uno de los tres trimestres.

**JSON ENTRADA**
```json
{
  "idStudent": "6",
  "idCommissionSubject": "1",
  "periodName": "FIRST_TRIMESTER",
  "numericalQualification": "6"
}
```

**JSON SALIDA**
```json
{
  "idQualification": 8,
  "numericalQualification": 6,
  "idCommissionSubject": 1,
  "periodName": "SECOND_TRIMESTER",
  "idStudent": 6
}
```

---
#### POST http://localhost:8080/api/teacher/qualification/8
* [Eliminar una Calificación](). El profesor podrá eliminar una calificación trimestral de un estudiante, pasando en el endpoint el ID de la calificación.

##### Respuestas posibles
* [2004 OK]() Calificación eliminada con éxito.
* [404 OK]() No se ha encontrado Calificación por su ID.