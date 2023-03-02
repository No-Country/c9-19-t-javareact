package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.request.QualifyStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response.QualifyStudentResponse;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.service.IQualificationService;

import java.util.Optional;

@RestController
@RequestMapping("api/teacher")
public class QualifyStudentController {

    @Autowired
    private IQualificationService qualificationService;

    @GetMapping("/qualification/{idPerson}")
    @PreAuthorize("hasAuthority('TEACHER')")
    public ResponseEntity<?> getQualificationsById(@PathVariable Long idPerson) {
        Optional<LoadQualificationDTO> loadQualificationDTO = qualificationService.getQualificationsById(idPerson);
        return loadQualificationDTO.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().header("error", "Could not found id " + idPerson).build());
    }

    @PostMapping("/qualification")
    @PreAuthorize("hasAuthority('TEACHER')")
    public ResponseEntity<?> createQualifyStudent(@Validated @RequestBody QualifyStudentRequest qualifyStudent, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>("Los datos ID del estudiante, periodo, ID de la asignatura-comisión y nota numérica son obligatorios", HttpStatus.BAD_REQUEST);
        }
        try{
            return qualificationService.createQualifyStudent(qualifyStudent);

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/qualification/{idQualification}")
    @PreAuthorize("hasAuthority('TEACHER')")
    public ResponseEntity<?> deleteQualifyStudent(@PathVariable Long idQualification){
        try{
            return qualificationService.deleteByIdQualifyStudent(idQualification);

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/qualification")
    @PreAuthorize("hasAuthority('TEACHER')")
    public ResponseEntity<?> updateQualifyStudent(@Validated @RequestBody QualifyStudentResponse qualifyStudent, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>("Los datos ID del estudiante, periodo, ID de la asignatura-comisión y nota numérica son obligatorios", HttpStatus.BAD_REQUEST);
        }
        try{
            return qualificationService.updateQualifyStudent(qualifyStudent);

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
