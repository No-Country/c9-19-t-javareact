---

## ADMINISTRADOR - Rutas Protegidas

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

#### POST http://127.0.0.1:8080/api/admin/register 
* [Crear una Persona]() Puede crear una persona de cada tipo de rol para que pruebe el funcionamiento de la autorización.
* [Roles de Persona-Usuario]() ` ADMINISTRATOR, TUTOR, TEACHER, STUDENT` Una persona puede tener solo un Rol.

**JSON ENTRADA**
```json
{
  "firstName": "Martin",
  "lastName" : "Gomez",
  "birthDate": "1980-07-25",
  "document": "99999999",
  "email": "martin@gmail.com",
  "phone": "4527-0000",
  "roleName": "ADMINISTRATOR"
}
```

**JSON SALIDA**
```json
{
  "idPerson": 14,
  "firstName": "Martin",
  "lastName": "Gomez",
  "birthDate": "1980-07-25",
  "document": "999999999",
  "email": "martin@gmail.com",
  "phone": "4527-0000",
  "roleName": "ADMINISTRATOR"
}
```

---

#### GET http://127.0.0.1:8080/api/admin/person/{1}
* [Seleccionar una Persona](). Puede buscar una persona pasando su ID en el EndPoint.

**JSON SALIDA**
```json
{
  "idPerson": 1,
  "firstName": "Director",
  "lastName": "Director",
  "document": "0000",
  "birthDate": "1990-09-15",
  "email": "escuela@gmail.com",
  "phone": "+5491159117241",
  "idUser": 1,
  "username": "0000",
  "roleName": "ADMINISTRATOR"
}
```
---

#### PUT http://127.0.0.1:8080/api/admin/person
* [Actualizar una Persona](). Para actualizar una Persona en body, debera cargar la nueva información, tenga en cuenta que existe datos sensibles que no pueden ser cambiados, tales como el DNI y USUARIO.
  **JSON ENTRADA**
```json
{
  "idPerson": 7,
  "firstName": "Nuevo nombre",
  "lastName": "Ramirez",
  "birthDate": "1975-11-15",
  "email": "hugo@gmail.com",
  "phone": "+5491159117241"
}
```

**JSON SALIDA**
```json
{
  "idPerson": 7,
  "firstName": "Nuevo nombre",
  "lastName": "Ramirez",
  "document": "51778181",
  "birthDate": "1975-11-15",
  "email": "hugo@gmail.com",
  "phone": "+5491159117241",
  "idUser": 2,
  "username": "51778181",
  "roleName": "STUDENT"
}
```

---

#### PUT http://127.0.0.1:8080/api/admin/student/state
* [Switch State Estudiante](). Puede cambiar el estado de un estudiante.
* Estado false: Estudiante no se encuentra con inscripción del presente año, se cambió de o terminó la escuela.
* Estado true: Estudiante con inscripción reciente, por lo tanto, es regular.
  **JSON ENTRADA**
```json
{
  "id": "7",
  "state": false
}
```

**JSON SALIDA**
```json
{
  "fullName": "Agustin Ramirez",
  "dni": "51778181",
  "roleName": "STUDENT",
  "isRegular": false
}
```
---

#### GET http://localhost:8080/api/admin/person
* [Todas las Personas](). Recuperar TODAS personas con su Rol.

**JSON SALIDA**
```json
[
  {
    "id": 6,
    "fullName": "Jazmin Ayala",
    "roleName": "STUDENT"
  },
  {
    "id": 7,
    "fullName": "Agustin Ramirez",
    "roleName": "STUDENT"
  },
  {
    "id": 8,
    "fullName": "Julio Gonzalez",
    "roleName": "STUDENT"
  },
  {
    "id": 2,
    "fullName": "David Ayala",
    "roleName": "TEACHER"
  },
  {
    "id": 3,
    "fullName": "Romina Gomez",
    "roleName": "TEACHER"
  },
  {
    "id": 4,
    "fullName": "David Ayala",
    "roleName": "TUTOR"
  },
  {
    "id": 5,
    "fullName": "Hugo Ramirez",
    "roleName": "TUTOR"
  }
]
```

---

#### GET http://localhost:8080/api/admin/person?page={1}&size={2}
* [Todas las Personas](). Recuperar personas por paginación.

**JSON SALIDA**
```json
[
  {
    "id": 2,
    "fullName": "David Ayala"
  },
  {
    "id": 3,
    "fullName": "Romina Gomez"
  }
]
```

---
## Dashboard

#### GET http://localhost:8080/api/admin/teacher?page={1}&size={2}
* [Todos los Profesores](). Recuperar profesores por paginación.

**JSON SALIDA**
```json
[
  {
    "id": 2,
    "fullName": "David Ayala"
  },
  {
    "id": 3,
    "fullName": "Romina Gomez"
  }
]
```
#### GET http://localhost:8080/api/admin/tutor?page={1}&size={2}
* [Todos los Tutores](). Recuperar tutores por paginación.

**JSON SALIDA**
```json
[
  {
    "id": 4,
    "fullName": "David Ayala"
  },
  {
    "id": 5,
    "fullName": "Hugo Ramirez"
  }
]
```
#### GET http://localhost:8080/api/admin/student?page={1}&size={2}
* [Todos los Estudiantes](). Recuperar estudiantes por paginación.

**JSON SALIDA**
```json
[
  {
    "id": 6,
    "fullName": "Jazmin Ayala"
  },
  {
    "id": 7,
    "fullName": "Agustin Ramirez"
  }
]
```
---

#### GET http://localhost:8080/api/admin/person/count
* [Cantidad por Rol](). Obtener las cantidades de personas por cada Rol (Estudiante, Profesor y Tutor).

**JSON SALIDA**
```json
[
  {
    "roleName": "STUDENT",
    "count": 2
  },
  {
    "roleName": "TEACHER",
    "count": 2
  },
  {
    "roleName": "TUTOR",
    "count": 2
  }
]
```
