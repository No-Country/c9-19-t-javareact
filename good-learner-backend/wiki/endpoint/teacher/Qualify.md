---

## PROFESOR - Rutas Protegidas

---

#### POST http://localhost:8080/api/teacher/qualification
* [Calificar Estudiante](). El profesor podrá calificar a un estudiante colocándole nota numérica a uno de los tres trimestres.
[Periodos]() `FIRST_TRIMESTER, SECOND_TRIMESTER, THIRD_TRIMESTER, ANNUAL, PREVIOUS`

##### Respuestas Posibles
- [201 OK Created]() - Se creó con éxito la calificación.
- [400 Bad Request]() - Cuando falta algún dato en json de entrada.

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

---
#### PUT http://localhost:8080/api/teacher/qualification
* [Calificar Estudiante](). El profesor podrá calificar a un estudiante colocándole nota numérica a uno de los tres trimestres.
* [Periodos]() `FIRST_TRIMESTER, SECOND_TRIMESTER, THIRD_TRIMESTER, ANNUAL, PREVIOUS`

##### Respuestas Posibles
- [201 OK Created]() - Se creo con éxito la calificación.
- [404 Not Found]() - No se encontró la calificación por su ID.
- [400 Bad Request]() - Cuando falta algún dato en json de entrada.

**JSON ENTRADA**
```json
{
  "idQualification": 7,
  "numericalQualification": 5,
  "idCommissionSubject": 1,
  "periodName": "FIRST_TRIMESTER",
  "idStudent": 6
}
```

**JSON SALIDA**
```json
{
  "idQualification": 7,
  "numericalQualification": 5,
  "idCommissionSubject": 1,
  "periodName": "FIRST_TRIMESTER",
  "idStudent": 6
}
```

---

---

#### POST http://localhost:8080/api/teacher/qualification/8
* [Eliminar una Calificación](). El profesor podrá eliminar una calificación trimestral de un estudiante, pasando en el endpoint el ID de la calificación.

##### Respuestas posibles
- [204 OK]() Calificación eliminada con éxito.
- [404 OK]() No se ha encontrado Calificación por su ID.