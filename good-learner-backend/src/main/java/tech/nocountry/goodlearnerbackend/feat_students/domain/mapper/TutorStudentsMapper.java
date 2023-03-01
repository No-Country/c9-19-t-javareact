package tech.nocountry.goodlearnerbackend.feat_students.domain.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.goodlearnerbackend.feat_students.domain.dto.TutorStudentsDTO;
import tech.nocountry.goodlearnerbackend.model.TutorStudent;

@Component
public class TutorStudentsMapper {

    public TutorStudentsDTO tutorStudentToTutorStudentsDTO(TutorStudent tutorStudent) {
        TutorStudentsDTO tutorStudentsDTO = new TutorStudentsDTO();
        tutorStudentsDTO.setIdPerson(tutorStudent.getStudent().getIdPerson());
        tutorStudentsDTO.setRegular(tutorStudent.getStudent().getIsRegular());
        tutorStudentsDTO.setIdTutorStudent(tutorStudent.getIdTutorStudent());
        tutorStudentsDTO.setDocument(tutorStudent.getStudent().getDocument());
        tutorStudentsDTO.setFirstName(tutorStudent.getStudent().getFirstName());
        tutorStudentsDTO.setLastName(tutorStudent.getStudent().getLastName());
        return tutorStudentsDTO;
    }

}
