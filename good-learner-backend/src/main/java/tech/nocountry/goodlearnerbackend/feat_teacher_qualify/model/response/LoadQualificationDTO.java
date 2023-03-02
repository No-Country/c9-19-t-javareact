package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class LoadQualificationDTO {
    private Integer numericalNote;
    private CommissionSubject commissionSubject;
    private TypeQualification typeQualification;
    private Period period;
    private String lastName;
    private String firstName;
    private Long id;
    private Person person;
    private Qualification qualification;


    public LoadQualificationDTO(Long id, String firstName, String lastName, Period period, TypeQualification typeQualification, CommissionSubject commissionSubject, Integer numericalNote){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.period = period;
        this.typeQualification = typeQualification;
        this.commissionSubject = commissionSubject;
        this.numericalNote = numericalNote;
    }

}
