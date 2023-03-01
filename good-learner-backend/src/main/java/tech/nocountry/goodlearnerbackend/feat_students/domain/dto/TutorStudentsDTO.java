package tech.nocountry.goodlearnerbackend.feat_students.domain.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import tech.nocountry.goodlearnerbackend.model.Student;

@Getter
@Setter
@ToString
public class TutorStudentsDTO {

    private Long IdTutorStudent;
    private Long idPerson;
    private String firstName;
    private String lastName;
    private String document;
    private boolean isRegular;
    public TutorStudentsDTO() {}
    public TutorStudentsDTO(Long idTutorStudent, Long IdTutorStudent, Long idPerson, String firstName, String lastName, String document, boolean isRegular) {
        this.idPerson = idPerson;
        this.firstName = firstName;
        this.lastName = lastName;
        this.document = document;
        this.isRegular = isRegular;
        this.IdTutorStudent = idTutorStudent;
    }

}