package tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import tech.nocountry.goodlearnerbackend.model.DayName;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class AssignationRequest {
    @NotNull
    private LocalTime assignationDate;
    @NotNull
    private LocalTime startTime;
    @NotNull
    private LocalTime endTime;
    @NotNull
    private Long idCommission;
    @NotNull
    private DayName dayName;
    @NotNull
    private Long idTeacher;
    @NotNull
    private Long subjectId;
}
