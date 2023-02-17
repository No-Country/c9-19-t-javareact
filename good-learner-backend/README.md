# GOOD LEARNER BACKEND

[![Java](https://img.shields.io/badge/Code-Java-red)](https://docs.oracle.com/en/java/javase/17/docs/api/index.html)
[![Spring](https://img.shields.io/badge/Framework-Spring-darkgreen)](https://spring.io/)


## Technology




## JWT

http://jwt.io/introduction

Es un estandar abierto que permite transmitir información entre dos partes:

JSON Web Token

## Funcionamiento de Session
1. Client envía una petición a un servidor (/api/login)
2. Servidor valida username y password, si no son válidos devolverá una respuesta 401 unauthorized
3. Servidor valida username y password, si son válidos, entonces se almacenan el usuario en session.
4. Se genera una cookie en el Cliente.
5. En proximas peticiones se comprueba que el cliente esta en session.

Desventajas
La información de la session se almacena en ele servidor, lo cual consume recursos.


## Funcionamiento

1. Client envía una petición a un servidor (/api/login)
2. Servidor valida username y password, si no son válidos devolverá una respuesta 401 unauthorized
3. Servidor valida username y password, si son válidos, entonces genera un token JWT utilizando una secret key.
4. Servidor devuelve el token JWT generado al Cliente.
5. Cliente envía peticiones a los endpoints REST del servidor utilizando el token JWT en las cabeceras.
6. Servidor valida el token JWT en cada petición y si es correcto permite el acceso a los datos.

Ventajas:

* El token se almacena en el Cliente, de manera que consume menos recursos en el Servidor, lo cual permite escalabilidad.

Desventajas:
* El token está en el navegador, no podríamos invalidarlo antes de la fecha de expiración asignada cuando se creó.
* Lo que se realiza es dar la opción de logout, lo cual simplemente borra el token.

## Estructura del token JWT

3 partes se paradas por un punto (.) y codificadas en base 64 cada una:

1. Header
```json
{
  "alg": "HS512",
  "type": "JWT"
}
```

2. Payload (información, datos del usuario, no sensibles)
```json
{
  "name": "David",
  "admin": true
}
```
3. Signatura

```
HMACKSHA256(
base64UrlEncode(header) + "." + base64UrlEncoded(payload), secret
)
```

Ejemplo del Token generado:


El User-Agent envía el token JWT en las cabeceras:

```
Authorization: Bearer <token>
```

## Configuración Spring

Crear proyecto Spring Boot con:

* Spring Security
* Spring Web
* Spring Boot DevTools
* Spring Data JPA
* MySQL
* Dependencia JWT (se añade manualmente en el pom.xml)

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
```
```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
```
```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
```

## Validaciones

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

