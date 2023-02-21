package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.PeriodName;
import tech.nocountry.goodlearnerbackend.model.SubjectName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QualifyStudentDTO {
    private SubjectName subject;
    private PeriodName periodoName;
    private Integer numberQualification;
}
