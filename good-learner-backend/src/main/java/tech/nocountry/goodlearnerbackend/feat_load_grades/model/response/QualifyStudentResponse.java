package tech.nocountry.goodlearnerbackend.feat_load_grades.model.response;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import tech.nocountry.goodlearnerbackend.model.PeriodName;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class QualifyStudentResponse {
    @NotNull
    private Long idQualification;

    @NotNull
    private Integer numericalQualification;

    @NotNull
    private Long idCommissionSubject;

    @NotNull
    private PeriodName periodName;

    @NotNull
    private Long idStudent;
}
