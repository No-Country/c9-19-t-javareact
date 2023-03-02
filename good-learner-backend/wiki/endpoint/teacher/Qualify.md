---

## PROFESOR - Rutas Protegidas

---
#### GET http://localhost:8080/api/teacher/qualification
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