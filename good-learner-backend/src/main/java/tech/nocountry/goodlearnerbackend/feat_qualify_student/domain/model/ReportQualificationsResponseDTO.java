package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class ReportQualifications {

    private String fullName;
    private String course;
    private List<QualifyStudentDTO> qualifications;
}
