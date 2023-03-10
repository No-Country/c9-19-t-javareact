package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.request.QualifyStudentRequest;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response.QualifyStudentResponse;

import java.util.List;
import java.util.Optional;

@Service
public interface IQualificationService {

    List<LoadQualificationDTO> getAllQualifications();

    Optional<LoadQualificationDTO> getQualificationsById(Long idPerson);

    ResponseEntity<?> createQualifyStudent(QualifyStudentRequest qualifyStudent);

    ResponseEntity<?> deleteByIdQualifyStudent(Long idQualifyStudent);

    ResponseEntity<?> updateQualifyStudent(QualifyStudentResponse qualifyStudentRequest);
}
