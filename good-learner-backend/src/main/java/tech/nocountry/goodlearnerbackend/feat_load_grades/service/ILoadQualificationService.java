package tech.nocountry.goodlearnerbackend.feat_load_grades.service;

import org.springframework.stereotype.Service;
import tech.nocountry.goodlearnerbackend.feat_load_grades.dto.LoadQualificationDTO;

import java.util.List;
import java.util.Optional;

@Service
public interface ILoadQualificationService {

    List<LoadQualificationDTO> getAllQualifications();

    Optional<LoadQualificationDTO> getQualificationsById(Long idPerson);
}
