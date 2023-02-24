package tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.PersonDetailDTO;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.StudentResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.model.SwitchStateStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_user_card.domain.services.PersonCardService;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/admin")
public class UserCardController {

    @Autowired
    private PersonCardService personCardService;

    /**
     * Recuperar una Persona por su ID
     * @param id
     * @return ResponseEntity
     * @throws Exception
     */
    @GetMapping("/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findOneById(@PathVariable Long id) throws Exception {

        return personCardService.findPerson(id);

    }

    /**
     * Actualizar una Persona
     * @param personDetailDTO
     * @return ResponseEntity
     * @throws Exception
     */
    @PutMapping("/person")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updatePerson(@RequestBody PersonDetailDTO personDetailDTO) throws Exception {

        return personCardService.updatePerson(personDetailDTO);
    }

    /**
     * Cambiar el estado de un Estudiante, si es true, es un alumno regular e inscripto. En cambio, si es false, no está inscripto o no es regular.
     * @param switchStateStudentRequest
     * @return ResponseEntity
     * @throws Exception
     */
    @PutMapping("/student/state")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteUserByUsername(@Validated @RequestBody SwitchStateStudentRequest switchStateStudentRequest, BindingResult validations) throws Exception {
        if(validations.hasErrors()){
            return new ResponseEntity<String>("El Id del Estudiante y nuevo Estado son obligatorios", HttpStatus.BAD_REQUEST);
        }
        StudentResponse student = personCardService.switchStateStudent(switchStateStudentRequest);
        if(student == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(student);
    }

    /*@GetMapping("user/person/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> findUserByIdPerson(@PathVariable Long id) throws Exception {
        Optional<User> user = userRepository.buscarPorIdPerson(id);
        if(user.isEmpty()){
            return ResponseEntity.ok("No se encontro Persona");
        }
        return ResponseEntity.ok(user);
    }*/

}
