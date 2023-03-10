package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.service.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response.LoadQualificationDTO;
import tech.nocountry.goodlearnerbackend.model.Qualification;

import java.util.Optional;

//@Mapper
@Component
public class QualifyStudentMapper {
    public Optional<LoadQualificationDTO> mapToLoadQualificationDTO(Qualification qualification) {
        if (qualification == null) {
            return Optional.empty();
        }
        LoadQualificationDTO dto = new LoadQualificationDTO(
                qualification.getStudent().getIdPerson(),
                qualification.getStudent().getFirstName(),
                qualification.getStudent().getLastName(),
                qualification.getPeriod(),
                qualification.getTypeQualification(),
                qualification.getCommissionSubject(),
                qualification.getNumericalNote()
        );
        return Optional.of(dto);
    }
}
