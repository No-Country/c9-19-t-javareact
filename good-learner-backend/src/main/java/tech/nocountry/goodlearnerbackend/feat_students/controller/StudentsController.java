package tech.nocountry.goodlearnerbackend.feat_students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import tech.nocountry.goodlearnerbackend.feat_students.domain.mapper.TutorStudentsMapper;
import tech.nocountry.goodlearnerbackend.model.Tutor;
import tech.nocountry.goodlearnerbackend.model.TutorStudent;
import tech.nocountry.goodlearnerbackend.repository.TutorStudentRepository;
import tech.nocountry.goodlearnerbackend.repository.TutorRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping("api")
public class StudentsController {
    @Autowired
    private TutorStudentRepository tutorStudentRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private TutorStudentsMapper tutorStudentsMapper;

    @GetMapping("/tutor/students/{idTutor}")
    public ResponseEntity<?> geTutorStudents(@PathVariable Long idTutor) {
        Optional<Tutor> tutorOptional =  tutorRepository.findById(idTutor);
        if(tutorOptional.isPresent()){
            Tutor tutor = tutorOptional.get();
            List<TutorStudent> students = tutorStudentRepository.findRelationByTutor(tutor);
            return ResponseEntity.ok(students.stream().map(tutorStudentsMapper::tutorStudentToTutorStudentsDTO).collect(Collectors.toList()));

        }
        return new ResponseEntity<>("No se ha encontrado el tutor", HttpStatus.NOT_FOUND);
    }

}