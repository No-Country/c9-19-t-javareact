package tech.nocountry.goodlearnerbackend.feat_qualif.domian.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.goodlearnerbackend.feat_auth.data.repository.UsuarioRepository;
import tech.nocountry.goodlearnerbackend.feat_qualif.domian.model.StudentDTO;

@RestController
@RequestMapping("api/student")
public class QualificationController {
    private final UsuarioRepository usuarioRepository;

    public QualificationController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping("/my-data")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<?> getPerson() throws  Exception{
        StudentDTO studentDTO = new StudentDTO();
        return new ResponseEntity<>(studentDTO, HttpStatus.OK);
    }
}
