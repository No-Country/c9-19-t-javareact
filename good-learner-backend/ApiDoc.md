# API GOOD LEARNER BACKEND

---

### Rutas de NO PROTEGIDA

#### POST http://127.0.0.1:8080/api/user/login
* Para logearse un usuario primero deberá estar cargado en el sistema. El administrador será el único que podrá realizar un CRUD sobre Personas-Usuarios entre otras gestiones.
* Login de usuario. Devolverá el `jwt` que usaremos para acceder a los recursos protegidos de nuestra aplicación.
* Por defecto el nombre de usuario y clave serán el Documento que colocó al registrarse.
* Esta cargado un ADMINISTRADOR como punto de entrada. Se describe a continuación.
* Para iniciar debera Logearse.

**JSON ENTRADA**
```json
{
  "nombreUsuario": "0000",
  "clave" : "0000"
}
```

**JSON SALIDA**
```json
{
  "id": 1,
  "nombreUsuario": "0000",
  "rol": "ADMINISTRATOR",
  "token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIwMDAwIiwiZXhwIjoxNjc2NjU4OTIwfQ.ThSdwAcRseifgFyJbaOWVKOgoxJhZJt5cCvPfqb46IZnnmfPSPJHvzjpSRbz_1I4"
}
```

**Cada vez que se ejecute el método login se genera un token que tendrá un tiempo de expiración.**


---

## Rutas de PROTEGIDAS 

## ADMINISTRADOR

## EndPoint o URL

* Para el consumo de estos recursos se debe enviar el Token de autorización.
##### Es posible en viarlo de dos maneras:

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

#### DELETE http://127.0.0.1:8080/api/admin/person/{1}
* [Eliminar una Persona](). Puede eliminar una persona pasando su ID en el EndPoint.

**JSON SALIDA**
```json
{
  
}
```

#### GET http://localhost:8080/api/admin/person?page={1}&size={2}
* [Todas las Personas](). Recuperar personas por paginación.

**JSON SALIDA**
```json
[
  {
    "id": 3,
    "fullName": "Romina Gomez"
  },
  {
    "id": 4,
    "fullName": "David Ayala"
  }
]
```