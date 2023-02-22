package tech.nocountry.goodlearnerbackend.feat_qualify_student.domain.model;

import lombok.*;

import java.time.LocalDate;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ReportYearRequestDTO {
    private Integer year;
}
