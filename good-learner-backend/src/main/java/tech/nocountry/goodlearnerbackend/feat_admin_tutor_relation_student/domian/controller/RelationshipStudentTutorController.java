package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.ReadRelationRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.domian.service.IRelationshipService;
import tech.nocountry.goodlearnerbackend.repository.StudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorStudentRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin")
public class RelationshipStudentTutorController {

    @Autowired
    private IRelationshipService iRelationshipService;
    @Autowired
    private TutorStudentRepository tutorStudentRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TutorRepository tutorRepository;

    @GetMapping("/relationship/student/{idStudent}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> selectRelationshipByIdStudent(@PathVariable Long idStudent){
        try {

            return iRelationshipService.findRelationByStudent(idStudent);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/relationship/tutor/{idTutor}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> selectRelationshipByIdTutor(@PathVariable Long idTutor){
        try {

            return iRelationshipService.findRelationByTutor(idTutor);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/relationship")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> createdRelation(@Validated @RequestBody RelationStudentTutorRequest relationStudentTutorRequest, BindingResult validations){
        try {
            if(validations.hasErrors()) {
            return new ResponseEntity<String>("Los valores del vinculo y los ID de Estudiante y Tutor son Obligatorios", HttpStatus.BAD_REQUEST);
        }
            return iRelationshipService.createdRelation(relationStudentTutorRequest);
        }
        catch ( Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/relationship")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updateRelation(@Validated @RequestBody RelationStudentTutorRequest relationStudentTutorRequest, BindingResult validations){
        try {
            if(validations.hasErrors()) {
                return new ResponseEntity<String>("Los valores del vinculo y los ID de Estudiante y Tutor son Obligatorios", HttpStatus.BAD_REQUEST);
            }
            return  iRelationshipService.updateRelation(relationStudentTutorRequest);
        }
        catch ( Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/relationship/{idRelation}")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteRelationById(@PathVariable Long idRelation){
        try {
            if(iRelationshipService.deleteRelationById(idRelation)){
                return ResponseEntity.noContent().build();
            }
            return new ResponseEntity<>("No se encontró la relación a pretende eliminar.", HttpStatus.NO_CONTENT);
        }
        catch ( Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/relationship")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> deleteRelation(@Validated @RequestBody ReadRelationRequest relationRequest, BindingResult validations){
        try {
            if(validations.hasErrors()) {
                return new ResponseEntity<String>("Los valores del vinculo y los ID de Estudiante y Tutor son Obligatorios", HttpStatus.BAD_REQUEST);
            }
            if(iRelationshipService.deleteRelation(relationRequest)){
                return ResponseEntity.noContent().build();
            }
            return new ResponseEntity<>("No se encontró el estudiante o Tutor.", HttpStatus.NOT_FOUND);
        }
        catch ( Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
