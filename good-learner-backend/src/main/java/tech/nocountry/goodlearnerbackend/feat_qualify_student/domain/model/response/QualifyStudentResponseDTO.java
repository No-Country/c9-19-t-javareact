package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.PeriodName;
import tech.nocountry.goodlearnerbackend.model.SubjectName;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class QualifyStudentResponseDTO {
    private SubjectName subject;
    private PeriodName periodoName;
    private Integer numberQualification;
}
