package tech.nocountry.goodlearnerbackend.feat_auth.domian.controladores;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.PersonRegisterDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.dto.UserLoginDTO;
import tech.nocountry.goodlearnerbackend.feat_auth.domian.servicios.UsuarioService;
@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/user")
public class UserController {

	@Autowired
	private UsuarioService usuarioService;


	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody UserLoginDTO usuarioLogin, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>("El usuario y la clave son obligatorios", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<UserDTO>(usuarioService.login(usuarioLogin), HttpStatus.OK);

	}

	@PostMapping("/register")
	public ResponseEntity<?> crear(@Valid @RequestBody PersonRegisterDTO personRegister, BindingResult validaciones)
			throws Exception {

		if (validaciones.hasErrors()) {
			return new ResponseEntity<String>("Campos Imcompletos", HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<PersonRegisterDTO>(usuarioService.register(personRegister), HttpStatus.OK);
			//return new ResponseEntity<UserDTO>(usuarioService.crear(user), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/area/administrator")
	@PreAuthorize("hasAuthority('ADMINISTRATOR')")
	public ResponseEntity<?> accesoSoloAdministrador() throws Exception {
		try{
			return new ResponseEntity<>("You are ADMINISTRATOR", HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<String>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/area/student")
	@PreAuthorize("hasAuthority('STUDENT')")
	public ResponseEntity<?> accessStudent() {
		return new ResponseEntity<String>("Yor are STUDENT", HttpStatus.OK);
	}

	@GetMapping("/area/tutor")
	@PreAuthorize("hasAuthority('TUTOR')")
	public ResponseEntity<?> accessTutor() {
		return new ResponseEntity<String>("Yor are TUTOR", HttpStatus.OK);
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
