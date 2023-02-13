package tech.nocountry.goodlearnerbackend.feat_auth.domian.controladores;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UsuarioLoginDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.UsuarioService;
import tech.nocountry.goodlearnerbackend.feat_auth.jwt.JwtProvider;

@RestController
@RequestMapping("api/user")
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody UsuarioLoginDTO usuarioLogin, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>("El usuario y la clave son obligatorios", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<UsuarioDTO>(usuarioService.login(usuarioLogin), HttpStatus.OK);

	}

	@PostMapping("/register")
	public ResponseEntity<?> crear(@Valid @RequestBody UsuarioDTO usuario, BindingResult validaciones)
			throws Exception {

		if (validaciones.hasErrors()) {
			return new ResponseEntity<String>("Campos Imcompletos", HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<UsuarioDTO>(usuarioService.crear(usuario), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/area/administrator")
	@PreAuthorize("hasAuthority('ADMINISTRATOR')")
	public ResponseEntity<?> accesoSoloAdministrador(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorization) throws Exception {
		try{
			String token = null;
			if (authorization != null && authorization.startsWith("Bearer")) {
				 token = authorization.replace("Bearer ", "");
			}
			String username = JwtProvider.getNombreUsuario(token);
			return new ResponseEntity<>("You are Administrator. Username: "+username, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<String>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/area/student")
	@PreAuthorize("hasAuthority('STUDENT')")
	public ResponseEntity<?> accessStudent() {
		return new ResponseEntity<String>("Yor are Student", HttpStatus.OK);
	}

	@GetMapping("/area/teacher")
	@PreAuthorize("hasAuthority('TEACHER')")
	public ResponseEntity<?> accessTeacher() {
		return new ResponseEntity<String>("Yor are Teacher", HttpStatus.OK);
	}

	@GetMapping("/area/usuario-restringido")
	@PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
	public ResponseEntity<?> accesoSoloUsuarioRestringido() {
		return new ResponseEntity<>("Eres un usuario restringido", HttpStatus.OK);
	}

	@GetMapping("/area/usuario-logueado")
	public ResponseEntity<?> accesoSoloUsuarioLogueas() {
		return new ResponseEntity<>("Eres un usuario logueado, no importa tu rol", HttpStatus.OK);
	}

}
