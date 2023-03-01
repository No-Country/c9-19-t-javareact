package tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.model.request.TeacherSubjectRequest;
import tech.nocountry.goodlearnerbackend.feat_admin_teacher_subject.domain.service.ICommissionSubjectService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("api/admin")
public class TeacherSubjectController {

    @Autowired
    ICommissionSubjectService iCommissionSubjectService;

    @PutMapping("/commission/subject/teacher")
    @PreAuthorize("hasAuthority('ADMINISTRATOR')")
    public ResponseEntity<?> updateSubjectTeacher(@Validated @RequestBody TeacherSubjectRequest teacherSubjectRequest, BindingResult validations){
        if(validations.hasErrors())
            return new ResponseEntity<>("Los campos Id del profesor y Id de la materia-comisión son Obligatorios", HttpStatus.BAD_REQUEST);
        try{
            return iCommissionSubjectService.updateTeacherSubject(teacherSubjectRequest);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
