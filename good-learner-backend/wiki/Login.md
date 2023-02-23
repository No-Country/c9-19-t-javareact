# API GOOD LEARNER BACKEND

---

### LOGIN - Única Ruta NO Protegida

---

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