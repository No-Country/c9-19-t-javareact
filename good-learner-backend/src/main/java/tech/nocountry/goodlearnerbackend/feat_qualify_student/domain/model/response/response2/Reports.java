package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model.response.response2;

import lombok.*;

import java.util.List;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Reports {
    private String fullName;
    private String course;
    private Integer yearSchool;
    private List<SubjectQualifications> subjectQualificationsList;
}
