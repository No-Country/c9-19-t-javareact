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
@RequestMapping("api/person")
public class RelationshipStudentTutorController {

    @Autowired
    private IRelationshipService iRelationshipService;
    @Autowired
    private TutorStudentRepository tutorStudentRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TutorRepository tutorRepository;

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

    @GetMapping("/relationship")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> selectRelationship(@Validated @RequestBody ReadRelationRequest relationRequest, BindingResult validations){
       try{
           if(validations.hasErrors()) {
               return new ResponseEntity<>("Los campos ID del Tutor y Estudiante son Obligatorios", HttpStatus.BAD_REQUEST);
           }
           return iRelationshipService.findRelationByStudentTutor(relationRequest);
       } catch (Exception e){
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
}
