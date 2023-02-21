package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class ReportQualificationsResponseDTO {

    private String fullName;
    private String course;
    private Integer year;
    private List<QualifyStudentResponseDTO> qualifications;
}
