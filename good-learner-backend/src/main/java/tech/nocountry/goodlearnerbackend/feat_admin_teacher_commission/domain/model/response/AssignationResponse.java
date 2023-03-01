package tech.nocountry.goodlearnerbackend.feat_admin_teacher_commission.domain.model.response;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalTime;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class AssignationResponse {
    @NotNull
    private Long idAssignation;
    @NotNull
    private LocalTime assignationDate;
    @NotNull
    private Long idCommission;
    @NotNull
    private Long idTeacher;
}
