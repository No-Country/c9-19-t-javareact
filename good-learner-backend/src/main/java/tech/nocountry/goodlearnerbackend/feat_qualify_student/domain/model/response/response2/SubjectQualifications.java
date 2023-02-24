package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response.response2;

import lombok.*;
import tech.nocountry.goodlearnerbackend.model.PeriodName;
import tech.nocountry.goodlearnerbackend.model.SubjectName;
import tech.nocountry.goodlearnerbackend.model.TypeQualificationName;

import java.util.Map;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class SubjectQualifications {
    private SubjectName subjectName;
    private Map<PeriodName, Integer> qualifications;
}
