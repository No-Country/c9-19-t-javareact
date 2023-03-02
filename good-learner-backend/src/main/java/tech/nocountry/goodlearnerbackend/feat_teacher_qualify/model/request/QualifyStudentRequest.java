package tech.nocountry.goodlearnerbackend.feat_teacher_qualify.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import tech.nocountry.goodlearnerbackend.model.PeriodName;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class QualifyStudentRequest {

    @NotNull
    private Long idStudent;
    @NotNull
    private Long idCommissionSubject;
    @NotNull
    private PeriodName periodName;
    @NotNull
    private Integer numericalQualification;
}
