package tech.nocountry.goodlearnerbackend.feat_load_grades.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.request.QualifyStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_load_grades.model.response.LoadQualificationDTO;

import java.util.List;
import java.util.Optional;

@Service
public interface ILoadQualificationService {

    List<LoadQualificationDTO> getAllQualifications();

    Optional<LoadQualificationDTO> getQualificationsById(Long idPerson);

    ResponseEntity<?> createQualifyStudent(QualifyStudentRequest qualifyStudent);
}
