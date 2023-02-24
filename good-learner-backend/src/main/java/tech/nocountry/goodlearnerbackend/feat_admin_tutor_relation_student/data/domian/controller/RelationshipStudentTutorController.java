package tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.request.RelationStudentTutorRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.model.response.RelationTutorStudentResponse;
import tech.nocountry.goodlearnerbackend.feat_admin_tutor_relation_student.data.domian.service.IRelationshipService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/person")
public class RelationshipStudentTutorController {

    @Autowired
    private IRelationshipService iRelationshipService;

    @PostMapping("/relationship")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> createdRelation(@Validated @RequestBody RelationStudentTutorRequest relationStudentTutorRequest, BindingResult validations){
        if(validations.hasErrors()) {
            return new ResponseEntity<String>("Los valores del vinculo y los ID de Estudiante y Tutor son Obligatorios", HttpStatus.BAD_REQUEST);
        }
        try {
            RelationTutorStudentResponse relationTutorStudentResponse = iRelationshipService.createdRelation(relationStudentTutorRequest);

            if(relationTutorStudentResponse == null)
                return new ResponseEntity<String>("No se ha encontrado al estudiante o tutor.", HttpStatus.NOT_FOUND);

            return ResponseEntity.ok(relationTutorStudentResponse);
        }
        catch ( Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
